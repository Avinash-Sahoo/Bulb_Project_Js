var bulbg = document.querySelector(".bulb")
var btn = document.querySelector("button")
var flag=0;
btn.addEventListener("click",function(){
   if(flag===0){
    bulbg.style="box-shadow: 1px 1px 16px 3px yellow; background: radial-gradient(white 4%, yellow);";
    btn.innerText="Off";
    btn.style.backgroundColor="red";
    flag=1;
   }
   else{
    bulbg.style= "box-shadow: none; background:none; background-color:white;";
    btn.innerText="On"; 
    btn.style.backgroundColor=" rgb(56, 253, 17)";
    flag=0;
   }
})