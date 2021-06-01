function alertMsg () {
    var ul = document.querySelector('ul');
    var li = ul.firstElementChild.textContent;
    
    window.alert(li);
}

alertMsg();

function changeLastLi (string) {
    var ul = document.querySelector('ul');
    var allLi = ul.querySelectorAll('li');
    var lastLi = allLi[allLi.length-1];
    lastLi.textContent = string;
    

    
}

var text = 'Where to find us?'

changeLastLi(text);