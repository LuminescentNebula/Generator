function move() {
  var elem = document.getElementById("animate");
  var posx = 0;
  var posy = 0;
  var id = setInterval(frame, 500);

  function frame() {
    posx = (Math.random() * (window.innerWidth-100));
    posy = (Math.random() * (window.innerHeight-100));
    elem.style.top = posy + 'px';
    elem.style.left = posx + 'px';
  }
}