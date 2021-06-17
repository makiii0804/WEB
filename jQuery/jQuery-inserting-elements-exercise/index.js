/*Inserting elements
Start with a blank HTML page
Using just JS (jQuery), create an image gallery
All links to images in the gallery should be elements of the same array!
When the gallery is created and visible on the page, create gallery title and
insert it before the gallery images
Go through gallery images and set a random size to each gallery image*/
var body = $('body');

var divContainer = $('<div>');
divContainer.css({
    'background-color':'yellow',
    'width':'500px',
    'height':'500px',
    
})
body.append(divContainer);
var arrLinks = ['http://qnimate.com/wp-content/uploads/2014/03/images2.jpg','http://qnimate.com/wp-content/uploads/2014/03/images2.jpg','c'];

var img1 = $('<img>');
img1.attr('src', arrLinks[0]);
img1.css({
    'width':'300px',
   
})
divContainer.append(img1);


var img2 = $('<img>');
img2.attr('src', arrLinks[1]);
img2.css({
    'width':'300px'
})
divContainer.append(img2);