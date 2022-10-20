function open_menu() {
    var x = document.getElementById("menu");
    var y = document.getElementById("header");
    if (x.style.display==="block"){
        x.style.display="none";
        y.style.height="120px";
    } else {
        x.style.display="block";
        y.style.height="200px";
    }

}