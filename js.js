document.getElementById("YN").addEventListener("change", ev => {
    if (document.getElementById("YN").value  === "Да") {
        document.getElementsByClassName("js").item(0).textContent = "Круто!";
    } else {
        document.getElementsByClassName("js").item(0).textContent = "Попробуй ещё раз";
    }
});

function enter(){
    let login = prompt("Логин: ");
    if (login==="Админ"){
        let password = prompt("Пароль: ")
        if (password === "Я главный"){
            alert("Здравствуйте!")
        } else {
            if (password=== null){
                alert("Отменено")
            } else {
                alert("Неверный пароль")
            }
        }
    } else {
        if (login===null){
            alert("Отменено")
        } else {
            alert("Я вас не знаю")
        }
    }
}

function color() {
    let color="#"
    for (let i = 0; i < 6; i++) {
        let num =Math.ceil((Math.random() * 16))-1;
        if (num<=9){
            color+=num;
        } else {
            switch (num) {
                case 10:
                    color+="A";
                    break;
                case 11:
                    color+="B";
                    break;
                case 12:
                    color+="C";
                    break;
                case 13:
                    color+="D";
                    break;
                case 14:
                    color+="E";
                    break;
                case 15:
                    color+="F";
                    break;
            }
        }
    }
    document.getElementById("useless").style.backgroundColor=color;
}

var bool =false;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
function draw(e){
    if (bool===true){
        bool=false
        onmousemove = {}
    } else {
        bool = true
        onmousemove = function(e){ctx.fillRect(e.clientX+5 , e.clientY-280  , 2, 2);}
    }
}

