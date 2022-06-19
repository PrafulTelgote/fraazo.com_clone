var loca= document.querySelector("#location")



loca.addEventListener('click',getLOcation)

var id

var place=[
  { placename:"mumbai"},
  { placename:"hyderabad"},
  { placename:"bangalore"},
  { placename:"delhi"},
  { placename:"noida"},
  { placename:"gurugram"},
  { placename:"pune"},
]


var gmap= document.querySelector("#map")


var div= document.createElement("div")
div.className="para";

var input = document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("id","placesearch")
input.className="serchlocation"
var img = document.createElement('img');
img.src="../images/map.png"
img.style.width="100%"

var closee =document.createElement("button")
closee.className="window"

closee.innerHTML="close Window"
var id;

closee.addEventListener("click",function(e){
   gmap.innerHTML=" "

})
function getLOcation(){
  
div.append(input,img,closee)
   gmap.append(div)
  
   getvalue()
}

function getvalue(){
   input.addEventListener("input",function(e){


      if (id){
         clearInterval(id)
      }
     id= setTimeout(function(){
localStorage.setItem("placeserach",e.target.value)
conformlocation()
      },3000)
   })
}
 


var h=document.createElement("h1")



function conformlocation(){
   place.forEach(function(el){
    if(  el.placename==localStorage.getItem("placeserach")){
     
      h.innerHTML="Hurray, We deliver here"
      h.style.color="green"
      div.append(input,img,h)

    }
   
   })
      
}
