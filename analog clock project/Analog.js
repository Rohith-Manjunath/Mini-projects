let seconds_needle=document.getElementById("seconds_needle")
let hour_needle=document.getElementById("hour_needle")
let minutes_needle=document.getElementById("minutes_needle")


function updateClock(){
    const date=new Date()


    const hour =date.getHours()
    const mins =date.getMinutes()
    const secs =date.getSeconds()
const hour_Deg=(hour/12)*360;
const sec_Deg=(secs/60)*360;
const min_Deg=(mins/60)*360;
hour_needle.style.transform=`rotate(${hour_Deg}deg)`
minutes_needle.style.transform=`rotate(${min_Deg}deg)`
seconds_needle.style.transform=`rotate(${sec_Deg}deg)`

}


setInterval(updateClock,1000)