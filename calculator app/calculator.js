const buttons=document.querySelectorAll("button")
const input=document.querySelector("input")


for(let i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",()=>{

       if(buttons[i].innerHTML==="AC"){
        input.value=""
       }

       else if(buttons[i].innerHTML==="="){
input.value=eval(input.value)
       }

       else if(buttons[i].innerHTML==="DE"){
        input.value=input.value.toString().slice(0,-1)
       }

       else if(buttons[i].innerHTML==="OFF"){
        input.style.backgroundColor="black"
       }

     

       else

       {
        input.value+=buttons[i].textContent
       }
       
    })
    
}


