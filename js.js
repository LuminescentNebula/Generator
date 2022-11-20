document.getElementById("YN").addEventListener("change", ev => {
    if (document.getElementById("YN").value === "Да") {
        document.getElementsByClassName("js").item(0).textContent = "Круто!";
    } else {
        document.getElementsByClassName("js").item(0).textContent = "Попробуй ещё раз";
    }
});

function enter() {
    let login = prompt("Логин: ");
    if (login === "Админ") {
        let password = prompt("Пароль: ")
        if (password === "Я главный") {
            alert("Здравствуйте!")
        } else {
            if (password === null) {
                alert("Отменено")
            } else {
                alert("Неверный пароль")
            }
        }
    } else {
        if (login === null) {
            alert("Отменено")
        } else {
            alert("Я вас не знаю")
        }
    }
}

function color() {
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let num = Math.ceil((Math.random() * 16)) - 1;
        if (num <= 9) {
            color += num;
        } else {
            switch (num) {
                case 10:
                    color += "A";
                    break;
                case 11:
                    color += "B";
                    break;
                case 12:
                    color += "C";
                    break;
                case 13:
                    color += "D";
                    break;
                case 14:
                    color += "E";
                    break;
                case 15:
                    color += "F";
                    break;
            }
        }
    }
    document.getElementById("useless").style.backgroundColor = color;
}

var bool = false;

var canvas = document.getElementById('maze');
var ctx = canvas.getContext('2d');

function draw(e) {
    if (bool === true) {
        bool = false
        onmousemove = {}
    } else {
        bool = true
        onmousemove = function (e) {
            ctx.fillRect(e.clientX + 5, e.clientY - 280, 2, 2);
        }
    }
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
capcha = ""
for (i = 0; i < 10; i++) {
    capcha += characters[Math.ceil(Math.random() * characters.length) - 1]
}
document.getElementsByClassName("capcha").item(0).textContent = capcha

document.getElementById("capch-submit").addEventListener("click", capch_submit);
second = false

function isEmpty(obj) {
    for(var prop in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }
    return true
}

function capch_submit() {
    if (isEmpty(document.getElementById("capch-input").value)){
        alert("empty")
    }
    if (!second) {
        if (document.getElementById("capch-input").value.toString() === capcha.toString()) {
            document.getElementsByClassName("result").item(0).disabled = false;
        } else {
            let a = Math.ceil(Math.random() * 100) - 1
            let b = Math.ceil(Math.random() * 100) - 1

            document.getElementsByClassName("capcha").item(0).textContent = a.toString() + '+' + b.toString();
            capcha = a + b
            second = true
        }
    } else {
        if (document.getElementById("capch-input").value.toString() === capcha.toString()) {
            document.getElementsByClassName("result").item(0).disabled = false;
        } else {
            alert("Ошибка")
        }
    }
}


class Accumulator {
    constructor(startingValue) { this.value = parseInt(startingValue); }
    read(){
        this.value+=parseInt(prompt("Прибавить:"))
        document.getElementById("value").textContent=this.value
    }
}

ac=new Accumulator(0);
