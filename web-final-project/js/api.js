let endpoint = "http://api.tvmaze.com/search/shows?q=";
let $searchInput = document.querySelector(".form-control");
let $divContainerFluid = document.querySelector(".container-fluid");
let request = new XMLHttpRequest();
request.onload = function () {
  if (request.status >= 200 && request.status < 300) {
    let response = JSON.parse(request.responseText);
    console.log(response);
    response.items.forEach(function (user) {
      let name = user.login;
      let imageSrc = user.image.medium;
      let $divRow = document.createElement("div");
      $divRow.setAttribute("class", "row");
      $divContainerFluid.appendChild($divRow);
      let $divCol1 = document.createElement("div");
      $divCol1.setAttribute("class", "col");
      $divRow.appendChild($divCol1);
      let $divCol2 = document.createElement("div");
      $divCol2.setAttribute("class", "col");
      $divCol1.appendChild($divCol2);
      let $divCard = document.createElement("div");
      $divCard.setAttribute("class", "card");
      $divCol2.appendChild($divCard);
      let $img = document.createElement("img");
      $name.textContent = name;
      $img.setAttribute("src", imageSrc);
      $card.append($img, $name);
      $userContainer.appendChild($card);
      $result.appendChild($userContainer);
    });
  }
};
request.open("GET", "http://api.tvmaze.com/shows");
request.send();