const dropdown=document.querySelector(".globe-dropdown")
const dropdownMenu=document.querySelector(".dropdown")
const dropdown1=document.querySelector(".globe-dropdown1")
const dropdownMenu1=document.querySelector(".dropdown1")
const input =document.getElementById("input")
const language=document.getElementById("language")
const language1=document.getElementById("language1")
const placeholder =document.querySelector("#placeholder")
let bool=true;
let bool1=true;
let bool2=true;
const questions=document.querySelector(".questions");
const question_dropdown=document.querySelectorAll("#question-dropdown");
const description=document.querySelectorAll("#description");
const span=document.querySelectorAll("#span")
let show=true;
let bool3=true;



function showDescription(){

    description.forEach((dropdown)=>{

        {bool3&&span.forEach((spann)=>{
            if(bool2){

                dropdown.style.fontSize=`${23}px`;
            dropdown.style.height=`auto`;
            dropdown.style.padding=`26px`;
            dropdown.style.opacity=`1`;
            spann.style.transform="rotate(40deg)";
            spann.style.transition="0.4s";
            dropdown.style.transition="0.2s";


            }
    
        else{
    
            dropdown.style.fontSize=`0px`;
            dropdown.style.height=`${0}px`;
            dropdown.style.opacity=`0`;
            dropdown.style.padding=`0px`;
            spann.style.transform="rotate(0deg)";
        }

        
    }
    )
    bool3=!bool3

}
    
    
    
}

)
bool2=!bool2


    }
    
    
    
    

   




zz
   question_dropdown.forEach(drop=>{
drop.addEventListener("click",()=>{
     showDescription()   
 
 })
})

    




function dropdownShow(){
    dropdown.style.outline="1px solid white";
    dropdown.style.margin="1px";
    // language.style.backgroundColor="rgb(73, 73, 255)";

    if(bool){
        dropdownMenu.style.opacity="1";

    }
    else{
        dropdownMenu.style.opacity="0";
    }

    bool=!bool
}
function dropdownShow1(){
    dropdown1.style.outline="1px solid white";
    dropdown1.style.margin="1px";
    // language1.style.backgroundColor="rgb(73, 73, 255)";


    if(bool){
        dropdownMenu1.style.opacity="1";

    }
    else{
        dropdownMenu1.style.opacity="0";
    }

    bool=!bool
}

dropdown.addEventListener("click",()=>{
   dropdownShow();


})
dropdown1.addEventListener("click",()=>{
   dropdownShow1();


})

input.addEventListener("click",()=>{
    input.style.outline="2px solid white";
    placeholder.style.transition="0.1s";
    placeholder.style.transform=`translate(${-7}px,${-11}px)`;
    placeholder.style.fontSize="12px";
});