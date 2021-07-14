const endpoint = "http://api.tvmaze.com/search/shows?q=";
const $searchInput = document.querySelector(".form-control");
const $movieListHTML = document.querySelector("#movieList");
const $dropDownListWrapper = document.querySelector("#dropDownList");
const $singleMovie = document.querySelector("#singleMovie");
const $movieImg = document.querySelector(".movieImg");
const $noOfSeasons = document.querySelector(".seasons");
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
            console.log(movie);
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
                console.log(seasoneResponse);
                $noOfSeasons = seasoneResponse.length;
              }
            };
            seasoneCompleteURL = `https://api.tvmaze.com/shows/${$movieId}/seasons`;
            seasoneRequest.open("GET", seasoneCompleteURL);
            seasoneRequest.send();
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