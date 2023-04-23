const button=document.getElementById("button")
const popup=document.getElementById("popup")

button.addEventListener("click",()=>{

    popup.style.transform=`translateY(10px)`;
    button.style.opacity=0;
    popup.style.transition='0.5s';

})


