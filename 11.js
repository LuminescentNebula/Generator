let arr=[]

//arr.pop() Последний
//arr.shift() Первый
//arr.unshift(10) Добавить первый

function bin(){
    arr.pop()
    reload()
}
function filter(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    let newarr=[]
    console.log(a,b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>=a || arr[i]===b){
            newarr.push(arr[i])
        }
    }
    document.getElementById("filter-output").textContent=newarr.toString();
}
function sort(){
    let sorted=false
    while (!sorted){
        sorted=true
        for (let i = 1; i < arr.length; i++) {
            if (arr[i]>arr[i-1]){
                let temp=arr[i]
                arr[i]=arr[i-1]
                arr[i-1]=temp
                sorted=false
                break
            }
        }
    }
    reload()
}
function add(){
    arr.push(parseInt(document.getElementById("adding").value))
    reload()
}

function reload(){
    x=""
    for (let i in arr){
       x+=arr[i]+" "
    }
    document.getElementById("output").textContent=x;
}

let c=0
function counter(){
    c=c+1;
    document.getElementById("counter").textContent=c.toString();
    timer = setTimeout(counter, 3000);
}
counter()

