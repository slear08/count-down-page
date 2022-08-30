const targetDate = new Date("September 30, 2022 00:00:00").getTime();
const dataDay =  document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");

setInterval( () => {
    const currentDate = new Date();
    const numberOfDays = targetDate - currentDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const displayDays = Math.floor(numberOfDays / days);
    const displayHours = Math.floor((numberOfDays % days)/hours);
    const displayMinutes = Math.floor((numberOfDays % hours)/minutes);
    const displaySeconds = Math.floor((numberOfDays % minutes)/seconds);

    dataDay.innerText = displayDays;
    dataHours.innerText = displayHours;
    dataMinutes.innerText = displayMinutes;
    dataSeconds.innerText = displaySeconds;

},1000 );