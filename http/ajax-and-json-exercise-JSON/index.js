var endpoint = "https://dog.ceo/api/breeds/image/random";
var request = new XMLHttpRequest();
request.open("GET", endpoint);
var button = document.querySelector("button");
button.onclick = function () {
  var parsedData = JSON.parse(request.responseText);
  var div = document.querySelector("div");
  var img = document.createElement("img");
  img.setAttribute("src", parsedData.message);
  div.appendChild(img);
};
request.send();