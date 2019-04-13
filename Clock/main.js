const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");



const runClock = () => {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    console.log("Hour: " + hour, "minutes: " + min, "seconds: " + sec);

    let hourPosition = hour*360/12+min*(360/60)/12;
    let minPosition = min*360/60+sec*(360/60)/60;
    let secPosition = sec*360/60;

    hourHand.style.transform = "rotate(" + hourPosition + "deg)";
    minuteHand.style.transform = "rotate(" + minPosition + "deg)";
    secondHand.style.transform = "rotate(" + secPosition + "deg)";
}

let interval = setInterval(runClock, 1000);

