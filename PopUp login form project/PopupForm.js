const button=document.querySelector("button")
const form=document.querySelector(".container")

button.addEventListener("click",()=>{
form.style.opacity="1";
button.style.opacity="0";
form.style.transition="all 0.4s ease-in";
button.style.transition="all 0.1s ease-in";
button.style.transform="translateY(200px)"
})