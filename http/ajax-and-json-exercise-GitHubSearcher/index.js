var endpoint = "https://api.github.com/search/users?q=";
var $searchInput = document.querySelector("#search");
var $userContainer = document.querySelector("#users");
var $header = document.querySelector("header");
var request = new XMLHttpRequest();
request.onload = function () {
  if (request.status >= 200 && request.status < 300) {
    var response = JSON.parse(request.responseText);
    response.items.forEach(function (user) {
      var name = user.login;
      var imageSrc = user.avatar_url;
      var $img = document.createElement("img");
      var $name = document.createElement("p");
      var $card = document.createElement("div");
      $name.textContent = name;
      $img.setAttribute("src", imageSrc);
      $card.setAttribute("class", "card")
      $card.append($img, $name);
      $userContainer.appendChild($card);
      
    });
  }
};

$searchInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      var user = $searchInput.value;
      var completeUrl = endpoint + user + "&per_page=9";
      request.open("GET", completeUrl);
      request.send();
      $userContainer.innerHTML = "";
    }
  });