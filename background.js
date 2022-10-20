function move() {
  var elem = document.getElementById("animate");
  var posx = 0;
  var posy = 0;
  var id = setInterval(frame, 500);

  function frame() {
    posx = (Math.random() * (window.innerWidth));
    posy = (Math.random() * (window.innerHeight));
    elem.style.top = posy + 'px';
    elem.style.left = posx + 'px';
  }
}

