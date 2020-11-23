const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listOfIngredientsRef = document.getElementById("ingredients");

function create(arr) {
  let imagesList = [];
  arr.forEach((el) => {
    const createImg = document.createElement("li");
    createImg.textContent = el;
    imagesList.push(createImg);
  });
  return imagesList;
}

listOfIngredientsRef.append(...create(ingredients));
