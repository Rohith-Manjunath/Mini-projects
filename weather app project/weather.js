const city=document.getElementById("city")
const degree=document.getElementById("degree")
const wind=document.getElementById("wind")
const input=document.getElementById("input")
const fahrenheit=document.getElementById("fahrenheit")
const weather_pic=document.getElementById("weather_image")
const humidity=document.getElementById("humidity")
const weather_condition=document.getElementById("weather_condition")
const condition_pic=document.getElementById("condition_pic")

const button=document.getElementById("button")


async function data(){
   await fetch(`http://api.weatherapi.com/v1/current.json?key=d42666fcd103424dabe112253232004&q=${input.value}&aqi=no`)
    .then(response => response.json())
    .then(data=>{city.textContent=data.location.name
        degree.textContent=data.current.temp_c +"°C"
        fahrenheit.textContent=data.current.temp_f+"°F"
        wind.textContent="Wind:"+data.current.wind_mph+" m/hr"
        humidity.textContent="Humidity:"+data.current.humidity
        weather_condition.textContent=data.current.condition.text
        if(data.current.temp_c >=30){
            weather_image.src="./sun1.jpg"
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
