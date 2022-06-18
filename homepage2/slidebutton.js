let btn1=document.querySelector('#btnn1');
let btn2=document.querySelector('#btnn2');

btn1.addEventListener('click',()=> btn1.style.backgroundColor='blue')
btn2.addEventListener('click',()=>btn2.style.backgroundColor='white')

function myfun(){
  
    var x1=document.getElementById('num').value;
    if(x1===""){
        alert("Please Enter Your Number")
    }
    else{
    alert("SMS has been sent to your Mobile.!!");
    window.location.href="index.html"
    }
}


