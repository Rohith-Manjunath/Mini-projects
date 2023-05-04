const icon=document.getElementById("icon")
const container=document.querySelector(".container")
const cancel=document.getElementById("cancel")

icon.addEventListener("click",()=>{
    container.style.transform=`translateX(${0}px)`;
    container.style.transition="0.4s";
    icon.style.opacity="0";
})

cancel.addEventListener("click",()=>{
    container.style.transform=`translateX(${-350}px)`;
    icon.style.opacity="1"

})
