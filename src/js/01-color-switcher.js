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
    }, 1000);
});

 stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  
});