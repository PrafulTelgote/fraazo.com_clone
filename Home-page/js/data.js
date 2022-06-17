function Data(i,){
this.url=i;
this.name=n;
}
let arr=[]
let data1 =new Data("https://images.fraazo.com/fraazo-master/FDAS1.png/tr:w-512,h-512","fruits")

arr.push(data1)


function append(data){
    console.log(data)
data.forEach(function(elm){
    let div=document.createElement("div")
    let img1=document.createElement("img")
    img1.src=elm.url
    div.append(img1)
    document.getElementById("result").append(div)
    console.log(img1.src)
})
}
append(arr)