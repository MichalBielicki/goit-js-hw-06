const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
const createList = (ingredient) => {
  const elementOfList = document.createElement("li");
  elementOfList.textContent = `${ingredient}`;
  return elementOfList;
};
const createEl = ingredients.map(createList);

listEl.append(...createEl);
