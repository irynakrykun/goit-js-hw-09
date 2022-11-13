import { Notify } from 'notiflix/build/notiflix-notify-aio';
const FormEl = document.querySelector('.form');

FormEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const {
    elements: { delay, step,amount }
  } = e.currentTarget;
  let delayValue = Number(delay.value);
let stepValue = Number(step.value)
let amountValue = Number(amount.value)
  
  for (let i = 1; i <= amountValue; i += 1) {
           createPromise(i,delayValue )
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
        
    delayValue += stepValue;
    }
  }

  function createPromise(position, delay) {
  const obj = { position, delay };
    const shouldResolve = Math.random() > 0.3;
  
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          // Fulfill
          resolve(obj);
        } else {
          // Reject
          reject(obj);
        }
      }, delay);
    });
  }
      












