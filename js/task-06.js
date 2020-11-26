// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное
// количество символов.

// < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Введи 6 символов"
//     />
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

//     #validation - input {
//     border: 3px solid #bdbdbd;
// }

// #validation - input.valid {
//     border - color: #4caf50;
// }

// #validation - input.invalid {
//     border - color: #f44336;
// }

const validationInputRef = document.getElementById("validation-input");

function addValidClacc(el) {
  el.classList.add("valid");
}

function removeInvalidClass(el) {
  el.classList.remove("invalid");
}

function addInvalidClass(el) {
  el.classList.add("invalid");
}
const checkDataLengh = () => {
  const inputDataSetLength = Number.parseInt(validationInputRef.dataset.length);
  if (validationInputRef.value.length === inputDataSetLength) {
    addValidClacc(validationInputRef);
    removeInvalidClass(validationInputRef);
  }
  if (
    validationInputRef.value.length > inputDataSetLength ||
    validationInputRef.value.length < inputDataSetLength
  ) {
    addInvalidClass(validationInputRef);
  }
};

validationInputRef.addEventListener("blur", checkDataLengh);
