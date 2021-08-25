const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
let noName = "";

const userName = (text) => {
  if (text.currentTarget.value !== noName) {
    span.textContent = text.currentTarget.value;
  } else {
    span.textContent = "Anonymus";
  }
};
input.addEventListener("input", userName);
