/*Inserting elements
Start with a blank HTML page
Using just JS (jQuery), create an image gallery
All links to images in the gallery should be elements of the same array!
When the gallery is created and visible on the page, create gallery title and
insert it before the gallery images
Go through gallery images and set a random size to each gallery image*/
var $body = $('body');

var $divContainer = $('<div>').css({
    'width': '800px',
    'margin': '0 auto'
});

$body.append($divContainer);

var $arrLinks = ['https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];

$.each($arrLinks, (function(index){
    var $size = Math.round(300 * Math.random() + 100);
    $divContainer.append($('<img>').attr('src', $arrLinks[index]).css({
        'width': $size,
        'height': $size,
        'object-fit':'cover'
    }));
}))

var $heading = $('<h1>').text('Amazing Gallery').css({
    'color':'orange',
    'font-family':'Arial',
    'font-weight':'bold',
    'text-align':'center'
});
$divContainer.prepend($heading);