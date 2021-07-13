const endpoint = "http://api.tvmaze.com/search/shows?q=";
const $searchInput = document.querySelector(".form-control");
const $movieListHTML = document.querySelector("#movieList");
const $dropDown = document.querySelector("#dropdown");
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
  const newRequest = new XMLHttpRequest();
  newRequest.onload = function () {
    if (newRequest.status === 200) {
      const searchResponse = JSON.parse(newRequest.responseText);
      $dropDown.innerHTML = "";
      searchResponse.forEach(function (value) {
        console.log(value);
        let name = value.show.name;
        let $searchItem = document.createElement("li");
        $searchItem.setAttribute("class", "dropdown-item");
        $searchItem.textContent = name;
        $dropDown.appendChild($searchItem);
      });
    }
  };
  let inputValue = $searchInput.value;
  let newCompleteUrl = endpoint + inputValue;
  newRequest.open("GET", newCompleteUrl);
  newRequest.send();
  
});
// kreirati event listener na input polju on keypress, unutar eventa imamo request.onload I sve te korake. u complete url ćemo imati endpoint + input.value + ona prečica za 10per page. Nakon toga pravimo foreach za lijeve unutar ul id.dropdown