const countdown = () => {
    const countDate = new Date("march 5,2025 00:00:00"). getTime();
    const now = new Date().getTime();

    const remainingTime = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate these
    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML= textHour;
    document.querySelector(".minute").innerHTML =textMinute;
    document.querySelector(".second").innerHTML= textSecond;
};

 setInterval(countdown, 1000);

