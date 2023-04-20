const city=document.getElementById("city")
const degree=document.getElementById("degree")
const wind=document.getElementById("wind")
const input=document.getElementById("input")
const fahrenheit=document.getElementById("fahrenheit")
const weather_pic=document.getElementById("weather_image")

const button=document.getElementById("button")


async function data(){
   await fetch(`http://api.weatherapi.com/v1/current.json?key=d42666fcd103424dabe112253232004&q=${input.value}&aqi=no`)
    .then(response => response.json())
    .then(data=>{city.textContent=input.value 
        degree.textContent=data.current.temp_c +"°C"
        fahrenheit.textContent=data.current.temp_f+"°F"
        wind.textContent=data.current.wind_mph+" m/hr"
        if(data.current.temp_c >=30){
            weather_image.src="./sunny image.png"
        }
        else if(data.current.temp_c <30){
            weather_image.src="./cloudy.webp"

        }
        
    console.log(data)
    }
        )
}

button.addEventListener("click",()=>{
data()
})