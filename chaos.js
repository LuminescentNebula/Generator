var canvas = document.getElementById('chaos');
var ctx = canvas.getContext('2d');
var timer;
var dotsX;
var dotsY;
var dots;
var last;
var mod;

var slider = document.getElementById("dots");
var output = document.getElementById("value");
if (document.readyState) {
    slider.oninput = function (e) {
        output.textContent = e.target.value;
    }
}


function start(){
    dots=parseInt(slider.value);
    ctx.clearRect(0,0,500,500);
    if (dots===3){
        dotsX=[50,250,450];
        dotsY=[450,50,450];
        mod=0.5
    } else if (dots===4){
        dotsX=[50,450,50,450];
        dotsY=[50,50,450,450];
        mod=0.35
    }
    for (let i=0;i<dots;i++){
        ctx.fillRect(dotsX[i], dotsY[i], 2, 2);
    }
    last= [Math.ceil((Math.random() * 500)),Math.ceil((Math.random() * 500))];
    ctx.fillRect(last[0], last[1], 2, 2);
    chaos();
}

function chaos(){
    var rand = Math.ceil((Math.random() * dots)-1);
    last=[last[0]+(dotsX[rand]-last[0])*mod,last[1]+(dotsY[rand]-last[1])*mod];
    ctx.fillRect(last[0], last[1], 2, 2);
    timer = setTimeout(chaos, 1);
}