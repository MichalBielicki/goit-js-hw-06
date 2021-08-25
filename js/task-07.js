const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
const changeFontsizeFn = (evt) => {
  spanEl.style.fontSize = `${inputEl.value}px`;
};
inputEl.addEventListener("input", changeFontsizeFn);
