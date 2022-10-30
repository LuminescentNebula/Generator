function generate_number() {
    document.getElementById("number-output").textContent = Math.ceil((Math.random() * 10))-1;
}
function generate_color() {
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
    document.getElementById("color-output").textContent = color;
    document.getElementById("color-output").style.backgroundColor=color;
}
//TODO: Генератор слов
//TODO: Генератор букв
//TODO: Что-нибудь с API
//TODO: Генератор сокращений API/LASER/и т.д.