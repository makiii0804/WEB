var path = document.querySelector('.path');
var mario = document.querySelector('.mario');
var body = document.body;


window.addEventListener('keydown', function (e) {
    console.log('pressed');
    if(e.key == 'ArrowRight') {
        mario.removeAttribute('src');
        mario.setAttribute('src', './SuperMarioAssets/mario_running.gif');
    }
})