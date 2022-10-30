function generate_person() {
    /*TODO: Full generator*/
    let data="";
    let temp;
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    temp = Math.ceil((Math.random() * (10) + 1));
    for (let i =0;i<temp;i++){
        data+=characters.at(Math.ceil((Math.random() * (characters.length-1))));
    }
    data+="@";
    temp = Math.ceil((Math.random() * (5) + 1));
    for (let i =0;i<temp;i++){
        data+=characters.at(Math.ceil((Math.random() * (characters.length-11))));
    }
    data+=".";
    temp = Math.ceil((Math.random() * (3) + 1));
    for (let i =0;i<temp;i++){
        data+=characters.at(Math.ceil((Math.random() * (characters.length-11))));
    }
    document.querySelector('input[name="email"]').value=data;

    data="+7 "
    for (let i = 0; i < 10; i++) {
        data += Math.ceil((Math.random() * 10))-1;
        if (i===2 ||i===5||i===7){
            data+=" ";
        }
    }
    document.querySelector('input[name="tel"]').value = data;

    data="";
    data += Math.ceil((Math.random() * (2022 - 1900 + 1) + 1900))
    data+="-";
    temp = Math.ceil((Math.random() * 12));
    if (temp<10) data+="0";
    data+=temp;
    data+="-";
    if (temp===1||temp===3||temp===5||temp===7||temp===8||temp===10||temp===12){
        temp = Math.ceil((Math.random() * 31));
    } else if (temp===4||temp===6||temp===9||temp===11){
        temp = Math.ceil((Math.random() * 30));
    }else if (temp===2) {
        temp = Math.ceil((Math.random() * 28));
    }
    if (temp<10) data+="0";
    data+=temp;

    document.querySelector('input[name="birthday"]').value = data;

    temp=Math.ceil((Math.random() * 2));
    if (temp===1){
        document.querySelector('input[id="male"]').checked=true;
    } else{
        document.querySelector('input[id="female"]').checked=true;
    }

}