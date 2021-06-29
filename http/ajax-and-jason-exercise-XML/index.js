// var endpoint = "http://www.geoplugin.net/xml.gp?ip=164.152.189.25";
// 1. Create request
var newRequest = new XMLHttpRequets();
// 2. Init request
newRequest.open("GET", "http://www.geoplugin.net/xml.gp?ip=164.152.189.25");
// 3. Onload handler
newRequest.onload = function () {
  if (newRequest.status >= 200 && newRequest.status < 300) {
    var response = newRequest.responseXML;
    var country = response.querySelector("geoplugin_countryName").textContent;
    var $countryDisplay = document.querySelector("#country");
    $countryDisplay.textContent = country;
    console.log(country);
  }
};
// 4. Send request
newRequest.send();