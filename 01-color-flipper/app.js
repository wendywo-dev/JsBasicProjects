const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("btn");
const colorTextOutput = document.querySelector(".color");

button.addEventListener("click", () => {
  const randomNum = getRandomNum();
  document.body.style.backgroundColor = colors[randomNum];
  colorTextOutput.textContent = colors[randomNum];
});

const getRandomNum = () => {
  return Math.floor(Math.random() * colors.length);
};
