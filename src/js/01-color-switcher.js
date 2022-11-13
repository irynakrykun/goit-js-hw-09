const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timerId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
        const color = getRandomHexColor();
    document.querySelector('body').style.backgroundColor = color;
         startBtn.disabled = true;
          stopBtn.disabled = false;
    // startBtn.setAttribute('disabled', true);
    //   stopBtn.removeAttribute('disabled');

       
}, 1000);
});

 stopBtn.addEventListener("click", () => {
   clearInterval(timerId);
    stopBtn.disabled = true;
    startBtn.disabled = false;
  //  stopBtn.setAttribute('disabled', true);
  //   startBtn.removeAttribute('disabled');

  
 });
 