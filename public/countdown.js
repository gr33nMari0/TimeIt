const countdown = (countdownElements) => {
    const { dueDate, dayTimer, hourTimer, minuteTimer, secondTimer } = countdownElements;
    const countDate = new Date(`${dueDate}`).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    dayTimer.innerText = textDay;
    hourTimer.innerText = textHour;
    minuteTimer.innerText = textMinute;
    secondTimer.innerText = textSecond;
};

const timers = document.querySelectorAll('.timer')
setInterval(() => {
    timers.forEach((timer) => {
        let counters = timer.children[3].children;
        let countdownElements = {
            dueDate: timer.children[2].value,
            dayTimer: counters[0],
            hourTimer: counters[2],
            minuteTimer: counters[4],
            secondTimer: counters[6]
        }
        console.log(countdownElements)
        countdown(countdownElements)
        timer.addEventListener('click', () => {
            window.location.assign(`/full?dueDate=${countdownElements.dueDate}`)
        })
    })
}, 1000);
