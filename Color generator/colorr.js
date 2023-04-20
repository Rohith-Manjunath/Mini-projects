const button =document.querySelector("button")
const color=document.querySelector("h1")
const body=document.querySelector("body")

button.addEventListener("click",function(){
    const red=Math.ceil(Math.random()*255)
    const green=Math.ceil(Math.random()*255)
    const blue=Math.ceil(Math.random()*255)
    color.innerHTML=`rgb(${red},${green},${blue})`
    body.style.backgroundColor=`rgb(${red},${green},${blue})`

})

