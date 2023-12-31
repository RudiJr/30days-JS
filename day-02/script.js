const hourHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000)