const endpoint = "http://api.tvmaze.com/search/shows?q=";
const $searchInput = document.querySelector(".form-control");
const $movieListHTML = document.querySelector("#movieList");
const request = new XMLHttpRequest();
request.onload = function () {
  if (request.status == 200) {
    const response = JSON.parse(request.responseText);
    response.forEach(function (movie) {
      console.log(movie);
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
  var completeUrl = "http://api.tvmaze.com/shows";
  request.open("GET", completeUrl);
  request.send();
};