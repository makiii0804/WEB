//Select the first element of the list and give it a bottom border

var addBorder = $('li:first').css({
    'border-bottom':'1px solid black'
});

//Select all list elements and transform their text to uppercase

var listItems = $('li').css({
    'text-transform':'uppercase'
});

//Select active element of the list and change its font color
var liActive = $('li.active').css({
    'color':'red'
});

//Find the middle one and change its background color

var $middleLi = $("li:nth-of-type(3)");

$middleLi.css({
  "background-color": "yellow",
});




/*var changeBg = $("li").each(function (index, element) {
    if(index === 2) {
        $(element).css({
            'background-color':'yellow'
        });
    }
}); other way */