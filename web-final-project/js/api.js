const endpoint = "http://api.tvmaze.com/search/shows?q=";
const $searchInput = document.querySelector(".form-control");
const $movieListHTML = document.querySelector("#movieList");
const $dropDownListWrapper = document.querySelector("#dropDownList");
const $singleMovie = document.querySelector("#singleMovie");
const $movieImg = document.querySelector(".movieImg");
const $noOfSeasons = document.querySelector(".seasons");
const $seasonList = document.querySelector(".seasonList");
const $castList = document.querySelector(".castList");
const $shDetails = document.querySelector(".details");
const $backToHome = document.querySelector(".navbar-brand")

const request = new XMLHttpRequest();
request.onload = function () {
  if (request.status == 200) {
    const response = JSON.parse(request.responseText);
    response.forEach(function (movie) {
      const name = movie.name;
      const imageSrc = movie.image.medium;
      const $divCol = document.createElement("div");
      $divCol.setAttribute("class", "col");
      $movieListHTML.appendChild($divCol);
      const $divCard = document.createElement("div");
      $divCard.setAttribute("class", "card");
      $divCol.appendChild($divCard);
      const $img = document.createElement("img");
      $img.setAttribute("src", imageSrc);
      const $divCardBody = document.createElement("div");
      $divCardBody.setAttribute("class", "card-body");
      const $cardTitle = document.createElement("h5");
      $cardTitle.setAttribute("class", "card-title");
      $cardTitle.textContent = name;
      $divCardBody.appendChild($cardTitle);
      $divCard.append($img, $divCardBody);
    });
  }
};
window.onload = function () {
  const completeUrl = "http://api.tvmaze.com/shows";
  request.open("GET", completeUrl);
  request.send();
};
$searchInput.addEventListener("keyup", function () {
  if ($searchInput.value !== "") {
    const newRequest = new XMLHttpRequest();
    newRequest.onload = function () {
      if (newRequest.status === 200) {
        const searchResponse = JSON.parse(newRequest.responseText);
        $dropDownListWrapper.innerHTML = "";
        const $dropDown = document.createElement("ul");
        $dropDownListWrapper.appendChild($dropDown);
        searchResponse.forEach(function (movie) {
          let name = movie.show.name;
          let $searchItem = document.createElement("li");
          $searchItem.addEventListener("click", function replaceSingleMovie() {
            let $movieId = movie.show.id;
            $movieListHTML.style.display = "none";
            $singleMovie.style.display = "block";
            const movieRequest = new XMLHttpRequest();
            movieRequest.onload = function () {
              if (movieRequest.status === 200) {
                const movieResponse = JSON.parse(movieRequest.responseText);
                $movieImg.setAttribute("src", movieResponse.image.medium);
              }
            };
            movieCompleteURL = "https://api.tvmaze.com/shows/" + $movieId;
            movieRequest.open("GET", movieCompleteURL);
            movieRequest.send();
            const seasoneRequest = new XMLHttpRequest();
            seasoneRequest.onload = function () {
              if (seasoneRequest.status === 200) {
                let seasoneResponse = JSON.parse(seasoneRequest.responseText);
                $noOfSeasons.textContent = seasoneResponse.length;
                $seasonList.innerHTML = "";
                seasoneResponse.forEach(function (season) {
                  let $seasoneData = document.createElement("li");
                  let date1 = season.premiereDate;
                  let date2 = season.endDate;
                  $seasoneData.textContent = `${date1} ${date2}`;
                  $seasonList.appendChild($seasoneData);
                });
              }
            };
            seasoneCompleteURL = `https://api.tvmaze.com/shows/${$movieId}/seasons`;
            seasoneRequest.open("GET", seasoneCompleteURL);
            seasoneRequest.send();
            const castRequest = new XMLHttpRequest();
            $castList.innerHTML ="";
            castRequest.onload = function () {
              if (castRequest.status === 200) {
                let castResponse = JSON.parse(castRequest.responseText);
                castResponse.forEach(function (cast, i) {
                  if (i < 7) {
                    let $castData = document.createElement("li");
                    let castName = cast.person.name;
                    $castData.textContent = castName;
                    $castList.appendChild($castData);
                  }
                });
              }
            };
            castCompleteURL = `https://api.tvmaze.com/shows/${$movieId}/cast`;
            castRequest.open("GET", castCompleteURL);
            castRequest.send();
            const showDetailsRequest = new XMLHttpRequest();
            $shDetails.innerHTML = "";
            showDetailsRequest.onload = function () {
              if (showDetailsRequest.status === 200) {
                let showDetailsResponse = JSON.parse(
                  showDetailsRequest.responseText
                  );
                  console.log(showDetailsResponse);
                  $shDetails.innerHTML = showDetailsResponse.summary;
                }
              };
              showCompleteURL = `http://api.tvmaze.com/shows/${$movieId}`;
              showDetailsRequest.open("GET", showCompleteURL);
              showDetailsRequest.send();
            });
            $searchItem.textContent = name;
            $dropDown.appendChild($searchItem);
          });
        }
      };
      let inputValue = $searchInput.value;
      let newCompleteUrl = endpoint + inputValue;
      newRequest.open("GET", newCompleteUrl);
      newRequest.send();
    } else {
      $dropDownListWrapper.innerHTML = "";
    }
  });
  
  $backToHome.addEventListener("click", function() {
    $movieListHTML.style.display = "flex";
    $singleMovie.style.display = "none";
    request.send();
    
  })
  // kreirati event listener na input polju on keypress, unutar eventa imamo request.onload I sve te korake. u complete url ćemo imati endpoint + input.value + ona prečica za 10per page. Nakon toga pravimo foreach za lijeve unutar ul id.dropdown