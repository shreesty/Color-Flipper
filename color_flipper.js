

const colors=["red","green","blue","#f1f025"];

const btn= document.getElementById("click-me");
const color=document.querySelector(".color");

 
btn.addEventListener('click',function(){

//Get a random numnber
const randomNumber=getRandomNumbers();
// alert(randomNumber);


document.body.style.backgroundColor= colors[randomNumber];
color.textContent=colors[randomNumber];


});

function getRandomNumbers()
{
    
   return Math.floor(Math.random() * 3);
    
}



