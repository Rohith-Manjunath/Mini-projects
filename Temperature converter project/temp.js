const degree=document.getElementById("degree")
const fahrenheit=document.getElementById("fahrenheit")
const kelvin=document.getElementById("Kelvin")
const button=document.querySelector("button")

button.addEventListener("click",()=>{
    fahrenheit.value=degree.value*9/5+32+"°F";
    kelvin.value=Number(degree.value)+273.15+"K";
})