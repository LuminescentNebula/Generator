function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

let n=10
let h = 0

async function reload() {
    h++;
    let background = [0, 0, 0, 255]
    ctx.fillStyle = background
    canvas.width = 500;
    canvas.height = 500;
    n=10
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "red";
    let red = [(Math.ceil(Math.random() * canvas.width / n) - 1) * n, (Math.ceil(Math.random() * canvas.height / n) - 1) * n]
    ctx.fillRect(red[0], red[1], n, n)
    console.log(red[0], red[1])
    yellow_go_brr(background, red, h);
}

function check(b, around, n) {
    return b.data.at(0) === around[0] &&
        b.data.at(1) === around[1] &&
        b.data.at(2) === around[2] &&
        b.data.at(3) === around[3] &&
        b.data.at(n * 4 - 4) === around[0] &&
        b.data.at(n * 4 - 3) === around[1] &&
        b.data.at(n * 4 - 2) === around[2] &&
        b.data.at(n * 4 - 1) === around[3];
}
async function yellow_go_brr(background, red, iter) {
    let a;
    let b;
    let arr = []
    if (h === iter) {
        x = red[0]
        y = red[1]
        //for (x = 0; x < canvas.width; x += n) {
        //for (y = 0; y < canvas.height; y += n) {
        console.log(x, y);
        a = ctx.getImageData(x, y, n, n, {colorSpace: "srgb"})
        if (a.data.at(0) === 255 &&
            a.data.at(1) === 0 &&
            a.data.at(2) === 0 &&
            a.data.at(3) === 255
        ) {
            if (x >= 20) {                 //Влево
                b = ctx.getImageData(x - n * 2, y, n * 2, n, {colorSpace: "srgb"})
                if (check(b, background, n * n * 2)) {
                    arr.push(4)
                }
            }
            if (y >= 20) {                 //Вверх
                b = ctx.getImageData(x, y - n * 2, n, n * 2, {colorSpace: "srgb"})
                if (check(b, background, n * n * 2)) {
                    arr.push(3)
                }
            }
            if (x <= canvas.width - n * 4) {   //Вправо
                b = ctx.getImageData(x + n, y, n * 2, n, {colorSpace: "srgb"})
                if (check(b, background, n * n * 2)) {
                    arr.push(2)
                }
            }
            if (y <= canvas.height - n * 4) {  //Вниз
                b = ctx.getImageData(x, y + n, n, n * 2, {colorSpace: "srgb"})
                if (check(b, background, n * n * 2)) {
                    arr.push(1)
                }
            }
            console.log(x, y, arr)
            ctx.fillStyle = "yellow"
            switch (arr[Math.ceil(Math.random() * arr.length) - 1]) {
                case 1:
                    console.log("Вниз")
                    ctx.fillRect(x, y, n, n * 2)
                    ctx.fillStyle = "red"
                    red = [x, y + n * 2]
                    ctx.fillRect(x, y + n * 2, n, n)
                    break;
                case 2:
                    console.log("Вправо")
                    ctx.fillRect(x, y, n * 2, n)
                    ctx.fillStyle = "red"
                    red = [x + n * 2, y]
                    ctx.fillRect(x + n * 2, y, n, n)
                    break;
                case 3:
                    console.log("Вверх")
                    ctx.fillRect(x, y + n, n, -n * 2)
                    ctx.fillStyle = "red"
                    red = [x, y - n * 2]
                    ctx.fillRect(x, y - n * 2, n, n)
                    break
                case 4:
                    console.log("Влево")
                    ctx.fillRect(x + n, y, -n * 2, n)
                    ctx.fillStyle = "red"
                    red = [x - n * 2, y]
                    ctx.fillRect(x - n * 2, y, n, n)
                    break
            }
        }
        if (arr.length === 0) {
            temp_red = await blue_go_brr(red)
            if (temp_red === []) {
                stop()
            } else {
                red = temp_red
                await sleep(10)
                yellow_go_brr(background, red, iter)
            }
        } else {
            await sleep(10)
            yellow_go_brr(background, red, iter)
        }
        stop()
    }
}

async function blue_go_brr(red) {
    let background = [255, 255, 0, 255]
    let x
    let y
    let a;
    let arr = [];
    let b;
    x = red[0]
    y = red[1]
    //for (x = 0; x < canvas.width; x += n) {
    //for (y = 0; y < canvas.height; y += n) {
    a = ctx.getImageData(x, y, n, n, {colorSpace: "srgb"})
    if (a.data.at(0) === 255 &&
        a.data.at(1) === 0 &&
        a.data.at(2) === 0 &&
        a.data.at(3) === 255
    ) {
        arr = []
        if (x >= 20) {                 //Влево
            b = ctx.getImageData(x - n * 2, y, n * 2, n, {colorSpace: "srgb"})
            if (check(b, background, n * n * 2)) {
                arr.push(4)
            }
        }
        if (y >= 20) {                 //Вверх
            b = ctx.getImageData(x, y - n * 2, n, n * 2, {colorSpace: "srgb"})
            if (check(b, background, n * n * 2)) {
                arr.push(3)
            }
        }
        if (x <= canvas.width - n * 4) {   //Вправо
            b = ctx.getImageData(x + n, y, n * 2, n, {colorSpace: "srgb"})
            if (check(b, background, n * n * 2)) {
                arr.push(2)
            }
        }
        if (y <= canvas.height - n * 4) {  //Вниз
            b = ctx.getImageData(x, y + n, n, n * 2, {colorSpace: "srgb"})
            if (check(b, background, n * n * 2)) {
                arr.push(1)
            }
        }
        console.log(x, y, arr)
        ctx.fillStyle = "blue"
        switch (arr[Math.ceil(Math.random() * arr.length) - 1]) {
            case 1:
                console.log("Вниз")
                ctx.fillRect(x, y, n, n * 2)
                ctx.fillStyle = "red"
                red = [x, y + n * 2]
                ctx.fillRect(x, y + n * 2, n, n)
                break;
            case 2:
                console.log("Вправо")
                ctx.fillRect(x, y, n * 2, n)
                ctx.fillStyle = "red"
                red = [x + n * 2, y]
                ctx.fillRect(x + n * 2, y, n, n)
                break;
            case 3:
                console.log("Вверх")
                ctx.fillRect(x, y + n, n, -n * 2)
                ctx.fillStyle = "red"
                red = [x, y - n * 2]
                ctx.fillRect(x, y - n * 2, n, n)
                break
            case 4:
                console.log("Влево")
                ctx.fillRect(x + n, y, -n * 2, n)
                ctx.fillStyle = "red"
                red = [x - n * 2, y]
                ctx.fillRect(x - n * 2, y, n, n)
                break
        }
    }
    // }
    //}
    if (arr.length === 0) {
        return []
    }
    return red


}



canvas.width = 500;
canvas.height = 500;
n=10
ctx.update
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "red"
red = [(Math.ceil(Math.random() * canvas.width / n) - 1) * n, (Math.ceil(Math.random() * canvas.height / n) - 1) * n]
ctx.fillRect(red[0], red[1], n, n)
yellow_go_brr([0, 0, 0, 255], red, 0);

