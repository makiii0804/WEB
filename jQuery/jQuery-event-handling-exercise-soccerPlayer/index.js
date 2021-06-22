var $body = $("body");
var $html = $("html");
var $field = $("<div>");
var $player = $("<img>");
var $button = $("<button>");
var movement = true;
//$field.attr("src", "./img/field.png");
$player.attr("src", "./img/player.png");
$button.text("Stop moving");


$field.css({
  "background-image": "url('./img/field.png')",
  "background-repeat": "no-repeat",
  "background-size": "contain",
  "background-position": "center",
  display: "block",
  height: "100%",
  width: "100%",
});
$html.css({
  height: "100%"
})

$body.css({
  height: "100%",
  margin: "0",
});

$player.css({
  width: "120px",
  position: "absolute",
  top: "0",
  left: "200px",
  transition: '1s'
});

$button.css({
  position: "absolute",
  bottom: "0",
  right: "200px",
  padding: "5px 10px",
  "background-color": "#c0392b",
  color: "white",
  border: "none",
  "border-radius": "4px",
  cursor: "pointer",
});

$body.append($field);
$body.append($button);
$field.append($player);


$field.click(function(event){
  if(movement === true) {
    $player.css({top:(event.pageY -60) +'px'}),
    $player.css({left:(event.pageX -60) +'px'})
    }
})

$button.click(function() {
  if(movement === true) {
    movement = false;
    $button.text("Start moving");
  } else {
    movement = true;
    $button.text("Stop moving");
  }
})