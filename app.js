const countDown = () => {
    const countDate = new Date("September 27, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //How the time calculation works
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate the whole thing
    const targetDay = Math.floor(gap / day);
    const targetHour = Math.floor((gap % day) / hour);
    const targetMinute = Math.floor((gap % hour) / minute);
    const targetSecond = Math.floor((gap % minute) / second);

    // replacing html values with above calculated value
    document.querySelector('.day').innerHTML = targetDay;
    document.querySelector('.hour').innerHTML = targetHour;
    document.querySelector('.minute').innerHTML = targetMinute;
    document.querySelector('.second').innerHTML = targetSecond;
}
setInterval(countDown, 1000);
