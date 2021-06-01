/*Selecting One/Multiple Elements
Create two unordered lists on the page.
Create a function that selects the second list and applies a class that sets some
background color to it.
Create a second function that, when triggered, selects all &lt;li&gt; elements on the
page.
The function also sets a class that sets some bg color to every &lt;li&gt; element.
Create one more unordered list and one more function
The function​ should select only &lt;li&gt; elements from that last list
Each &lt;li&gt; element should get a class that sets some bg color and transforms the
text to uppercase.

*/


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