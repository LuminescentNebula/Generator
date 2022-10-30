function n_click(){
    const x = document.getElementsByClassName("notification").item(0);
    if (x.classList.contains("clicked")){
        x.classList.remove("clicked");
    } else {
        x.classList.add("clicked");
    }
}
