function generate_person() {
    /*TODO: Full generator*/
    let data="";
    let temp;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    temp = Math.ceil((Math.random() * (10) + 1));
    for (let i =0;i<temp;i++){
        data+=characters.at(Math.ceil((Math.random() * (characters.length-1))));
    }
    data+="@";
    temp = Math.ceil((Math.random() * (5) + 1));
    for (let i =0;i<temp;i++){
        data+=characters.at(Math.ceil((Math.random() * (characters.length-11-26))+26));
    }
    data+=".";
    temp = Math.ceil((Math.random() * (3) + 1));
    for (let i =0;i<temp;i++){
        data+=characters.at(Math.ceil(Math.random() * (characters.length-11-26))+26);
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


    first=["Zoe",
        "Theodora",
        "Alexios",
        "Pulcheria",
        "Irene",
        "Helena",
        "Agatha",
        "Anastasia",
        "Anna",
        "Ariadne",
        "Athenais",
        "Eudokia",
        "Sophia",
        "Thekla",
        "Joannina",
        "Euphryne",
        "Eulogia",
        "Constantina",
        "Maria",
        "Kyratsa",
        "Konstantia",
        "Pelagia",
        "Euphemia",
        "Justina",
        "Mastica",
        "Zena",
        "Anthusa",
        "Theophila",
        "Theodosia",
        "Galla",
        "Basilia",
        "Basina",
        "Placidia",
        "Adeodata",
        "Arethusa",
        "Iuliana",
        "Casia",
        "Marcia",
        "Casiane",
        "Antonina",
        "Evantia",
        "Pateria",
        "Therosia",
        "Sidonia",
        "Rustica",
        "Ionnina",
        "Gordiana",
        "Rhode",
        "Calixta",
        "Proseria",
        "Appa",
        "Petronia",
        "Syagria",
        "Leontia",
        "Eugenia",
        "Palatina",
        "Augustina",
        "Agnes",
        "Damiane",
        "Fausta",
        "Labinia",
        "Pompeiana",
        "Vitula",
        "Probina",
        "Petronella",
        "Veneranda",
        "Athanasia",
        "Aurelia",
        "Bore",
        "Fabia",
        "Martina",
        "Constantine",
        "Constantius",
        "Constans",
        "Julian",
        "Jovian",
        "Valentin",
        "Gratian",
        "Theodos",
        "Arcadius",
        "Marcian",
        "Leo",
        "Basilicus",
        "Anstasius",
        "Justinian",
        "Tiberius",
        "Maurice",
        "Phocas",
        "Heracus",
        "Heraklos",
        "Leontios",
        "Nikephos",
        "Staurakos",
        "Theophilos",
        "Basil",
        "Romanos",
        "Isaac",
        "Alexios",
        "Andronos",
        "Theodore",
        "Demetrios",
        "Ignatios",
        "Niketas",
        "Nicholas",
        "Petronas",
        "Asylaion",
        "Basilos",
        "Himerius",
        "Justin",
        "Leontius",
        "Licinius",
        "Mousos",
        "Photios",
        "Staurius",
        "Valens",
        "Petros",
        "Grigos",
        "Akakios",
        "Onorios",
        "Eustos",
        "Theophas",
        "Markos",
        "Nektaros",
        "Pangratos",
        "Kyros",
        "Isidoros",
        "Aurelius",
        "Nestorius",
        "Lukas",
        "Philaros",
        "Antigonos",
        "Euthymus",
        "Callincus",
        "Damianus",
        "Petronas",
        "Philippis",
        "Tiberios",
        "Tarasios",
        "Sabbas",
        "Neilos",
        "Makarios",
        "Helladus",
        "Honorius",
        "Flavius",
        "Artabas",
        "Theophact"]
    last=["Phokas",
        "Tzimiskes",
        "Argyros",
        "Komnenos",
        "Doukas",
        "Diogenes",
        "Botates",
        "Angelos",
        "Laskaris",
        "Palalogos",
        "Melodus",
        "Rhagabe",
        "Stakius",
        "Psellus",
        "Philonus",
        "Acinatus",
        "Palamas",
        "Glycas",
        "Palaeologa",
        "Acominata",
        "Comnena",
        "Ptochopmus",
        "Glabas",
        "Metoches",
        "Tornikos",
        "Skleros",
        "Parsos",
        "Mozis",
        "Mavronis",
        "Kalothes",
        "Melisnos",
        "Kourtikos",
        "Kourkouas",
        "Katakalon",
        "Kastamos",
        "Daimos",
        "Doukid",
        "Kalleris",
        "Dalassos",
        "Choumnos",
        "Chadyles",
        "Bryennios",
        "Axouch",
        "Aspietes",
        "Arianites",
        "Apokos",
        "Synadenos",
        "Bringas",
        "Rogerios",
        "Maleinos",
        "Choniates",
        "Cydones",
        "Bardanes",
        "Prodromus",
        "Lekapenos",
        "Handy",
        "Joey",
        "Boop",
        "Bucket",
        "Chum",
        "Marv",
        "Stubby",
        "Socket",
        "Spike",
        "Bolt",
        "Scrambler",
        "Bot",
        "Atom",
        "Alpha",
        "Gamma",
        "Ram",
        "Ratchet",
        "Megabyte",
        "Clamps",
        "Scrap",
        "Gadget",
        "Gear",
        "Giga",
        "Scrap",
        "Rusty",
        "Flange",
        "Wire",
        "Tink",
        "Meta",
        "Prime",
        "Acamar",
        "Achernar",
        "Achird",
        "Acrab",
        "Akrab",
        "Elakrab",
        "Graffias",
        "Acrux",
        "Acubens",
        "Adhafera",
        "Adhara",
        "Ain",
        "Aladfar",
        "Alamak",
        "Alathfar",
        "Alaraph",
        "Albaldah",
        "Albali",
        "Albireo",
        "Alchiba",
        "Alcor",
        "Alcyone",
        "Aldebaran",
        "Alderamin",
        "Aldhafera",
        "Aldhanab",
        "Aldhibain",
        "Aldib",
        "Fawaris",
        "Alfecca",
        "Alfirk",
        "Algedi",
        "Giedi",
        "Algenib",
        "Algenib",
        "Algieba",
        "Algol",
        "Algorab",
        "Alhajoth",
        "Alhena",
        "Alioth",
        "Alkaid",
        "Kurud",
        "Kalb",
        "Alkalurops",
        "Kaphrah",
        "Alkes",
        "Alkurah",
        "Almach",
        "Minliar",
        "Nair",
        "Alnasl",
        "Alnilam",
        "Alnitak",
        "Alniyat",
        "Niyat",
        "Alphard",
        "Alphecca",
        "Alpheratz",
        "Alrai",
        "Alrami"]
    data=first[Math.ceil((Math.random() * 146)-1)]+" "+last[Math.ceil((Math.random() * 146)-1)];
    document.querySelector('input[name="name"]').value = data;

    document.querySelectorAll("#cars > option").item(0).selected=false;
    document.querySelectorAll("#cars > option").item(1).selected=false;
    document.querySelectorAll("#cars > option").item(2).selected=false;

    document.querySelectorAll("#cars > option").item(Math.ceil((Math.random() * 3)-1)).selected=true;

    a="qwertyuiop[]';lkjhgfdsazxcvbnm,./`1234567890-=~!@#$%^&*()_+{}:><?|\\\"QWERTYUIOPLKJHGFDSAZXCVBNM"

    data=""
    for (let i=0;i<Math.ceil((Math.random() * 5)+8);i++){
        data+=a[Math.ceil((Math.random() * a.length))]
    }
    document.querySelector("#password").value = data;

}