let arr=[1,2,3,4,5,6,7,8,9]

//arr.pop() Последний
//arr.shift() Первый
//arr.unshift(10) Добавить первый

function bin(){
    arr.pop()
}
function filter(a,b){
    let newarr=[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>=a || arr[i]===b){
            newarr.push(arr[i])
        }
    }
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
}

arr.
console.log(arr)
