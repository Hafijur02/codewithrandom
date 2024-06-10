const randomBtn = document.getElementById("randomBtn");
const randomNum = document.getElementById("randomNum");

function generateRandom() {
  let random = Math.random() * 3 + 1;
  randomNum.textContent = random;
}

randomBtn.addEventListener("click", generateRandom);
