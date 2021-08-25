const listEl = document.querySelector("#validation-input");

function checkInputFn(evt) {
  if (listEl.value.length !== Number(listEl.getAttribute("data-length"))) {
    listEl.classList.add("invalid");
  } else {
    listEl.classList.remove("invalid");
    listEl.classList.add("valid");
  }
}
listEl.addEventListener("blur", checkInputFn);
