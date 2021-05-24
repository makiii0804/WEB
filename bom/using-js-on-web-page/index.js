console.log('Hello');

function getPlatform () {
    console.log('platform: ', window.navigator.platform);
}

getPlatform()

function browserVersion() {
    console.log('browser: ', window.navigator.appVersion);
}

browserVersion()

function browserCompany() {
    console.log('company:', window.navigator.vendor);
}
browserCompany()

function isOnline() {
    var status;
    if(window.navigator.onLine == true) {
        status ='status: online';
    } else {
        status = 'status: offline';
    }
    return status;
};

console.log(isOnline());


function windowRes () {
    console.log('height: ', window.screen.height);
    console.log('width: ', window.screen.width);
}
windowRes();

function printUrl () {
    console.log('fullURL: ', window.location.href);
}
printUrl();

function domainName () {
    console.log('domain: ', window.location.hostname);
}
domainName();

function protocolName () {
    console.log('protocol: ', window.location.protocol);
}
protocolName();

function parametarsURL () {
    console.log('parametars: ', window.location.search);
}
parametarsURL();

/*function reloadURL () {
    location.reload();
}
reloadURL();*/

/*function redirect (MARIJA) {
    window.location.replace(MARIJA);
}
redirect('https://developer.mozilla.org/en-US/docs/Web/API/Location/replace');*/

function setName() {
    window.localStorage.setItem("Name", "Dragan");
    window.localStorage.setItem("Age", "33");
}
setName();

function getName() {
    console.log(window.localStorage.getItem("Name"));
}
getName();

function getAge() {
    if (!window.localStorage.getItem("Age")) {
        console.log("There is no data");
    } else {
        console.log(window.localStorage.getItem("Age"));
    }
}
getAge();

/*function clearData() {
    window.localStorage.clear();
  }
  clearData();*/
  
function sessionData () {
    window.sessionStorage.setItem('Pet', 'Cat')
}
sessionData();

function greetMsg () {
    window.alert('Hello user!')
}
greetMsg();

function userQuestion () {
    
    var msg = window.prompt('How old are you?')

    if(window.confirm('We will provide this answer now ' + msg)) {
        window.alert('Success')
    }
}
userQuestion();

