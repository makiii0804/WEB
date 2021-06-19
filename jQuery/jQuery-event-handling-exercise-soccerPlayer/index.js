var $body = $("body");
var $field = $("<img>");
var $player = $("<img>");
var $button = $("<button>");
$field.attr("src", "./img/field.png");
$player.attr("src", "./img/player.png");
$button.text("Stop moving");

$field.css({
  //" background-image": "url(./img/field.png)",
  "background-repeat": "no-repeat",
  "background-size": "contain",
  "background-position": "center",
  display: "block",
  height: "100%",
  width: "100%",
});

$body.css({
  height: "100%",
  margin: "0",
});

$player.css({
  width: "120px",
  position: "absolute",
  top: "0",
  left: "200px",
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

$body.prepend($player);
$body.append($field);
$body.append($button);