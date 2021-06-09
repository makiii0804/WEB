var field = document.querySelector('.field');
var player = document.querySelector('.player');
var button = document.querySelector('.stop');


field.addEventListener('click', function (e){
    player.style.top = (e.clientY -40) +'px';
    player.style.left = (e.clientX -40) +'px';

})


