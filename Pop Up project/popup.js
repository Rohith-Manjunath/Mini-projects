const button=document.getElementById("button")
const popup=document.getElementById("popup")

button.addEventListener("click",()=>{

    popup.style.transform=`translateY(15px)`;

    setTimeout(()=>{
        popup.style.transform=`translateY(-230px)`;
        button.style.opacity=1;


    },2000)
    button.style.opacity=0;
    popup.style.transition='0.5s';

})


