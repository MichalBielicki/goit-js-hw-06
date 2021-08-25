function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const changeColorBtn = document.querySelector("button.change-color");
const colorNumber = document.querySelector("span.color");

const changeColor = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorNumber.textContent = getRandomHexColor();
  console.log(colorNumber.textContent);
};

changeColorBtn.addEventListener("click", changeColor);
