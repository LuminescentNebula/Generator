function move() {
  var elem = document.getElementById("animate");
  var posx = 0;
  var posy = 0;
  var id = setInterval(frame, 500);


function frame() {
  posx = (Math.random() * (window.innerWidth - 0) + 0);
  posy = (Math.random() * (window.innerHeight - 0) + 0);
  elem.style.top = posy + 'px';
  elem.style.left = posx + 'px';
}
}

function newR() {
  alert("newR");
  var elem = document.getElementById("container");
  let div = elem.createElement("div");
  div.id = "animate";
}
