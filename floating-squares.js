const squares = document.getElementsByClassName("square");
const holder= document.getElementsByClassName("floating-squares").item(0);
randomize_anim();

function randomize_anim() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.top=(Math.random() * (holder.clientHeight-250))+"px";
        squares[i].style.left=(Math.random() * (holder.clientWidth-250))+"px";
        squares[i].style.width=(Math.random()*20)+"%";
    }
    timer = setTimeout(randomize_anim, 1800);
}