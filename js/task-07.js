const fontSizeControlRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");
const fontSizeRef = Number.parseInt(
  window.getComputedStyle(textRef).getPropertyValue("font-size")
);
const defaultСoefficient = fontSizeRef / fontSizeControlRef.value;

fontSizeControlRef.addEventListener("change", (event) => {
  const fontSize = defaultСoefficient * event.target.value;
  textRef.style.fontSize = `${fontSize}px`;
});
