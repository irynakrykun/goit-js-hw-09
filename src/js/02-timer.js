import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const refs = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

startBtn.setAttribute('disabled', '');
let timerId = null;
 const currentTime = new Date();
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const timeUser = selectedDates[0];
               if (timeUser < currentTime) {
            alert("Please choose a date in the future");
           
        } else {
            startBtn.removeAttribute('disabled');
                   }
    }
};
startBtn.addEventListener('click', onTimer);

function onTimer() {
    let timerId = setInterval(() => {
        let finalTime = new Date(inputEl.value) - new Date();
        if (finalTime <= 1000) { clearInterval(timerId) }
        let timerMs = convertMs(finalTime);
        Object.entries(timerMs).forEach(([name, value]) => {
            refs[name].textContent = addLeadingZero(value)
        });
    }, 1000);

    function addLeadingZero(value) {
        return String(value).padStart(2, "0")
    }
 }

   function convertMs(finalTime) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(finalTime / day);
  // Remaining hours
  const hours = Math.floor((finalTime % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((finalTime % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((finalTime % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(inputEl, options);