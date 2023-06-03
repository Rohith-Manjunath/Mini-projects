const toggle=document.querySelector(".toggle")
const switchh=document.querySelector(".switch")
const light=document.querySelector(".light")
const Status=document.querySelector("h1")
let bool=true;


const move=()=>{
    bool?switchh.style.transform="translate(30px)":switchh.style.transform="translate(0px)";
    bool?toggle.style.backgroundColor="yellow":toggle.style.backgroundColor="black"
    switchh.style.transition="all 0.4s "
    toggle.style.transition="all 0.4s "

    if(bool){
        light.style.backgroundColor="yellow"
        light.style.boxShadow="0px 0px 150px 50px yellow"
        light.style.transition="all 0.4s"
        Status.textContent="ON"
    }
    else{
        light.style.backgroundColor="transparent"
        light.style.boxShadow="none"
        Status.textContent="OFF"

    }

bool=!bool
}

toggle.addEventListener("click",()=>{
move()
})
















// background-color: yellow;
// box-shadow: 0px 0px 150px 40px yellow;