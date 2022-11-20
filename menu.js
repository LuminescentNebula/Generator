
function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

function open_menu() {
    const emoticons="😀😃😄😁😆😅😂🤣☺️😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😮‍💨😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😶‍🌫️😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵😵‍💫🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿👹👺🤡💩👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾"
    const x = document.getElementsByTagName("header").item(0);
    if (x.classList.contains("hvr")){
        x.classList.remove("hvr");
        x.removeEventListener('wheel', preventScroll);
    } else {
        x.classList.add("hvr");
        x.addEventListener('wheel', preventScroll);
    }
}