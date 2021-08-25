let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterChange = (operation) => {
  operation();
  value.innerText = counterValue;
};
const add = () => counterValue++;
const sub = () => counterValue--;
incrementBtn.addEventListener("click", (e) => counterChange(add));
decrementBtn.addEventListener("click", (e) => counterChange(sub));
