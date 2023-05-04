const slider=document.querySelector(".slider");
const container=document.querySelector(".container");
const body=document.getElementById("body");
let toggle=true;


function togle(){


    if(toggle){

        
            slider.style.transform=`translateX(${50}px)`;
            slider.style.transition="0.3s";
            container.style.transition="0.3s";
        container.style.backgroundColor="black";
        slider.style.backgroundColor="white";
        body.style.backgroundColor="white";
        body.style.transition="0.5s";
        
        
    
    }
    
    else{
            slider.style.transform=`translateX(${-1}px)`;
            slider.style.transition="0.3s";
            container.style.transition="0.3s";
        container.style.backgroundColor="white";
        slider.style.backgroundColor="black";
        body.style.backgroundColor="black";
        body.style.transition="0.5s";

        
        
    }

    toggle=!toggle;

}




container.addEventListener("click",()=>{
    togle()
})
