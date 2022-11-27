class suitable{
    //x,y - правый верхний угол
    //width,height - длина и ширина проверяемого образца
    //suit - образец
    constructor(width,height,suit) {
        this.width=width;
        this.height=height;
        this.array=[];
        this.suit=suit
    }
    add(x,y){
        this.array.push([x,y])
    }
}

function find_first(color,n) {
    for (x = 0; x < canvas.width; x += n) {
        for (y = 0; y < canvas.height; y += n) {
            a = ctx.getImageData(x, y, n, n, {colorSpace: "srgb"})
            if (a.data.at(0) === 255 &&
                a.data.at(1) === 0 &&
                a.data.at(2) === 0 &&
                a.data.at(3) === 255
            ){}
        }
    }
}

function find_around(arr,color) {
}
//a -
//b - Образец, с которыйм надо сравнить
function  compare(a){}
