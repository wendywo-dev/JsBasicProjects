const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const colorTextOutput = document.querySelector(".color");

button.addEventListener("click", () => {
  let randomHex = "#";
  for (let i = 0; i < 6; i++) {
    randomHex += hex[getRandomNum()];
  }

  document.body.style.backgroundColor = randomHex;
  colorTextOutput.textContent = randomHex;
});

const getRandomNum = () => {
  return Math.floor(Math.random() * hex.length);
};
