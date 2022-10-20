function generate_person() {

    let number="+7";
    for (let i = 0; i < 10; i++) {
        number += Math.ceil((Math.random() * 10))-1;
    }
    document.querySelector('input[name="tel"]').value = number;

    number="";
    number += Math.ceil((Math.random() * 12));
    number += Math.ceil((Math.random() * 30));
    number += Math.ceil((Math.random() * (2022 - 1900 + 1) + 1900));

    document.querySelector('input[name="birthday"]').value = number;

}