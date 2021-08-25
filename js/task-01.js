const findAllCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${findAllCategories.length}`);
findAllCategories.forEach((item) => {
  const findNameOfTittle = item.querySelector("h2");
  const findNumberOfElement = item.querySelectorAll("li").length;
  console.log(` Category: ${findNameOfTittle.textContent}`);
  console.log(`Elements: ${findNumberOfElement}`);
});
