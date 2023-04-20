let hrs=document.getElementById("hrs")
let mins=document.getElementById("mins")
let secs=document.getElementById("secs")
let am=document.getElementById("am")


function sec(){



    let date=new Date();
hrs.innerHTML=date.getHours()
mins.innerHTML=date.getMinutes()
secs.innerHTML=date.getSeconds()

secs.innerHTML>=0&&secs.innerHTML<=9?secs.innerHTML=`0${date.getSeconds()}`:secs.innerHTML=date.getSeconds()
mins.innerHTML>=0&&mins.innerHTML<=9?mins.innerHTML=`0${date.getMinutes()}`:mins.innerHTML=date.getMinutes()
hrs.innerHTML>12?hrs.innerHTML-=12:hrs.innerHTML=`0${date.getHours()}`  
date.getHours()>=12&&date.getHours()<=23?am.innerHTML="PM":am.innerHTML="AM"



}

setInterval(sec,1000)