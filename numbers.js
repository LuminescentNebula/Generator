function number() {
    from=parseInt(document.getElementById("from").value);
    to=parseInt(document.getElementById("to").value);
    many=parseInt(document.getElementById("many").value);
    if (from > to){
        return
    }
    data=""
    let a=10
    if (many<=0){many=1}
    for (let i=0;i< many;i++){
        if (i!==0 && i!==many){
            data+=" ";
        }
        a=Math.floor(from + Math.random()*(to-from))
        data+=a
    }
    console.log(from,to,many,data)

    document.getElementById("number-output").textContent = data;
}