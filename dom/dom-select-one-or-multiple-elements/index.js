/*Selecting One/Multiple Elements*/


function getSecondUl () {
    var ul = document.querySelector('ul');
    var secondUl = ul.nextElementSibling;
    secondUl.className = 'bg-color';
}


function getAllLi () {
   var li = document.querySelectorAll('li');
    li.forEach(function(element){
        element.className = 'li-bg';
    })
}

function transformLi () {
    var temp = document.querySelectorAll('ul');
    var lastUl = temp[temp.length-1];
    lastUl = lastUl.children;
    for (var i = 0; i < lastUl.length; i++) {
        lastUl[i].className = 'li-transform'
    }
}
getSecondUl();
getAllLi();
transformLi();

/*__________________________________*/