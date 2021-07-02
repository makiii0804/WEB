var endpoint = "http://www.geoplugin.net/xml.gp?ip=";
var $countryDisplay = document.querySelector("#country");
var $continentDisplay = document.querySelector("#continent");
var $sityDisplay = document.querySelector("#sity");
var $submit = document.querySelector("#submit");
var $ipInput = document.querySelector("#ip");
// 1. Create request
var newRequest = new XMLHttpRequest();
// 3. Onload handler
newRequest.onload = function () {
  if (newRequest.status >= 200 && newRequest.status < 300) {
    var response = newRequest.responseXML;
    var country = response.querySelector("geoplugin_countryName").textContent;
    var continent = response.querySelector(
      "geoplugin_continentName"
    ).textContent;
    var sity = response.querySelector("geoplugin_city").textContent;
    $countryDisplay.textContent = "Country: " + country;
    $continentDisplay.textContent = "Continent: " + continent;
    $sityDisplay.textContent = "Sity: " + sity;
  }
};
$submit.addEventListener("click", function () {
  var ipAddress = $ipInput.value;
  var completeURL = endpoint + ipAddress;
  // 2. Init request
  newRequest.open("GET", completeURL);
  // 4. Send request
  newRequest.send();
});