var $gallery1 = $('<div>');
var $gallery2 = $('<div>');

var arrImageLinks1 = ['https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];

var arrImageLinks2 = ['https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];


$.each(arrImageLinks1, function (index) {
    
    var $img1 = $("<img>").attr("src", arrImageLinks1[index]).css({
        width: '33%',
        "object-fit": "cover",
    });
    $gallery1.append($img1);
});

$('body').append($gallery1);

var $imgBorder = $gallery1.children('img:nth-child(2)').addClass('selected');

$.each(arrImageLinks2, function (index) {
    
    var $img2 = $("<img>").attr("src", arrImageLinks2[index]).css({
        width: '33%',
        "object-fit": "cover",
    });
    $gallery2.append($img2);
});

$('body').append($gallery2);


$(function(){
$imgBorder.removeClass('selected');
$gallery1 =$imgBorder.parent();
$gallery2 = $gallery1.next();
$midImg = Math.round($gallery2.children().length / 2)
$($gallery2).children('img:nth-child('+ $midImg +')').addClass('selected')
})
    