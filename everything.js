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
function generate_smile() {
    const emoticons=["😀","😃","😄","😁","😆","😅","😂","🤣","☺","️😊","😇","🙂","🙃","😉","😌","😍","🥰","😘",
        "😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩",
        "🥳","😏","😒","😞","😔","😟","😕","🙁","☹","😣","😖","😫","😩",
        "🥺","😢","😭","😮","‍💨","😤","😠","😡","🤬","🤯","😳","🥵","🥶",
        "😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😶","‍🌫",
        "😐","😑","😬","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪",
        "😵","‍💫","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈",
        "👿","👹","👺","🤡","💩","👻","💀","☠","️👽","👾","🤖","🎃","😺",
        "😸","😹","😻","😼","😽","🙀","😿","😾"]
    let num =Math.ceil((Math.random() * emoticons.length))-1;
    document.getElementById("smile-output").textContent = emoticons[num];
}
function generate_answer() {
    const answers=[ "Бесспорно",
"Предрешено",
"Никаких сомнений",
"Определённо да",
"Можешь быть уверен в этом",
"Мне кажется — «да»",
"Вероятнее всего",
"Хорошие перспективы",
"Знаки говорят — «да»",
"Да",
"Пока не ясно, попробуй снова",
"Спроси позже",
"Лучше не рассказывать",
"Сейчас нельзя предсказать",
"Подумай и спроси опять",
"Даже не думай",
"Мой ответ — «нет»",
"По моим данным — «нет»",
"Перспективы не очень хорошие",
"Весьма сомнительно"]

    let num =Math.ceil((Math.random() * answers.length))-1;
    document.getElementById("answer-output").textContent = answers[num];
}

let first=0;
let second=0;
function generate_count() {
    if (Math.ceil((Math.random()*2))===1){
        first++
    } else{
        second++
    }
    document.getElementById("count-output").textContent=first+":"+second;
}

//TODO: Генератор сокращений API/LASER/и т.д.