function ranColor() {
  var ranco = randomColors();
  document.body.style.backgroundColor = ranco;
  document.getElementById("hexnum").innerHTML = ranco;
}

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}