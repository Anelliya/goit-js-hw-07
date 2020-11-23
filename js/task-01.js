// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то
// есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в
// онсоль текст заголовка элемента(тега h2) и количество элементов в категории
//     (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categories = document.querySelector("#categories");
const headerTextContent = document.querySelectorAll(".item h2");
const elementOfCategory = document.querySelectorAll(".item ul");

console.log(`В списке ${categories.children.length} категории`);


for (let i = 0; i < elementOfCategory.length; i += 1) {
  console.log(`Категория: ${headerTextContent[i].textContent}`);
  console.log(
    `Количество элементов: ${elementOfCategory[i].childElementCount}`
  );
}
