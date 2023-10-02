const containerEl = document.getElementById("container");
function boxCreator() {
  for (let index = 0; index < 30; index++) {
    const colorBoxEl = document.createElement("div");
    colorBoxEl.classList.add("colorBox");
    containerEl.appendChild(colorBoxEl);
  }
}
boxCreator();
let j;
const colorLetters = "0123456789abcdef";

function randomCode() {
  var colorCode = "";
  for (let index1 = 0; index1 < 6; index1++) {
    j = Math.floor(Math.random() * 16);
    colorCode = colorCode.concat(colorLetters[j]);
  }
  return colorCode;
}

const finalBox = document.getElementsByClassName("colorBox");

for (let k = 0; k < 30; k++) {
  let currentColor = "";
  finalBox[k].innerHTML = randomCode();
  currentColor = currentColor.concat("#", finalBox[k].innerHTML);
  finalBox[k].style.backgroundColor = currentColor;
}
