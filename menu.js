
function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

function open_menu() {
    const emoticons="๐๐๐๐๐๐๐๐คฃโบ๏ธ๐๐๐๐๐๐๐๐ฅฐ๐๐๐๐๐๐๐๐๐คช๐คจ๐ง๐ค๐๐คฉ๐ฅณ๐๐๐๐๐๐๐โน๏ธ๐ฃ๐๐ซ๐ฉ๐ฅบ๐ข๐ญ๐ฎโ๐จ๐ค๐ ๐ก๐คฌ๐คฏ๐ณ๐ฅต๐ฅถ๐ฑ๐จ๐ฐ๐ฅ๐๐ค๐ค๐คญ๐คซ๐คฅ๐ถ๐ถโ๐ซ๏ธ๐๐๐ฌ๐๐ฏ๐ฆ๐ง๐ฎ๐ฒ๐ฅฑ๐ด๐คค๐ช๐ต๐ตโ๐ซ๐ค๐ฅด๐คข๐คฎ๐คง๐ท๐ค๐ค๐ค๐ค ๐๐ฟ๐น๐บ๐คก๐ฉ๐ป๐โ ๏ธ๐ฝ๐พ๐ค๐๐บ๐ธ๐น๐ป๐ผ๐ฝ๐๐ฟ๐พ"
    const x = document.getElementsByTagName("header").item(0);
    if (x.classList.contains("hvr")){
        x.classList.remove("hvr");
        x.removeEventListener('wheel', preventScroll);
    } else {
        x.classList.add("hvr");
        x.addEventListener('wheel', preventScroll);
    }
}