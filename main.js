const display = document.querySelector('.display')

function show(){
var date = new Date()
var h = date.getHours(); // 0 - 23
var m = date.getMinutes(); // 0 - 59
var s = date.getSeconds(); // 0 - 59
var session = "AM";

if(h == 0){
    h = 12;
}

if(h > 12){
    h = h - 12;
    session = "PM";
}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;
var time = h + ":" + m + ":" + s + " " + session;

display.innerHTML =  time;
setTimeout(show, 1000);
}
show()




const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function clock(){
    const current = new Date()
    const secondRatio =  current.getSeconds() / 60 
    const minuteRatio = (secondRatio + current.getMinutes()
    ) / 60 
    const hourRatio = (minuteRatio + current.getHours()) / 12

    setRotation(hourHand, hourRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(secondHand, secondRatio)
    
    setTimeout(clock, 1000);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
clock()