let theme = localStorage.getItem("theme") == "light";
let element = document.body;
let button = document.querySelector("#themeButton");
let logElement = document.querySelector("#log");


if (theme) {
  element.classList.add("light");
  button.innerHTML = "🌙";
} else {
  button.innerHTML = "☀️";
}

function mode() {
  element.classList.toggle("light");

  if (element.classList.value == "light") {
    localStorage.setItem("theme", "light");
    button.innerHTML = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    button.innerHTML = "☀️";
  }
}
