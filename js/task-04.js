// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
//========
// 1 вариант
// function decrement() {
//   ref.counterValueRef = Number.parseInt(ref.counterValueRef.textContent) += 1}
// ========
// ====
// 2 варианты
// const decrement = () => {
//   counterValue -= 1;
//   ref.counterValueRef.textContent = counterValue;
// };

const ref = {
  counterRef: document.getElementById("counter"),
  counterValueRef: document.getElementById("value"),
  decrementRef: document.querySelector('button[data-action="decrement"]'),
  incrementRef: document.querySelector('button[data-action="increment"]'),
};

let counterValue = Number.parseInt(ref.counterValueRef.textContent);

const decrement = () => {
  counterValue -= 1;
  ref.counterValueRef.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  ref.counterValueRef.textContent = counterValue;
};

ref.decrementRef.addEventListener("click", decrement);

ref.incrementRef.addEventListener("click", increment);
