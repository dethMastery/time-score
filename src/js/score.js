let teamScore = [
  document.querySelector("#boardP1"),
  document.querySelector("#boardP2"),
  document.querySelector("#boardP3"),
  document.querySelector("#boardP4"),
  document.querySelector("#boardP5"),
];

let scoreSetup = [0, 0, 0, 0, 0];

if (localStorage.getItem("score") == null) {
  for (let i = 0; i < 5; i++) {
    teamScore[i].innerHTML = `<h1>0</h1>`;
  }

  localStorage.setItem("score", JSON.stringify(scoreSetup));
} else {
  let scoring = JSON.parse(localStorage.getItem('score'))

  for (let i = 0; i < 5; i++) {
    teamScore[i].innerHTML = `<h1>${scoring[i]}</h1>`;
  }
}
