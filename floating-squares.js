const squares = document.getElementsByClassName("square");

randomize_anim();

function randomize_anim() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.top=(Math.random() * (window.innerHeight-100))+"px";
        squares[i].style.left=(Math.random() * (window.innerWidth-100))+"px";
        squares[i].style.width=(Math.random()*20)+"%";
    }
    timer = setTimeout(randomize_anim, 1800);
}