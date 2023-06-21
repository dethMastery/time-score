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
    teamScore[i].innerHTML = `<h1 class="id${i}">0</h1>`;
  }

  localStorage.setItem("score", JSON.stringify(scoreSetup));
} else {
  let scoring = JSON.parse(localStorage.getItem("score"));

  for (let i = 0; i < 5; i++) {
    teamScore[i].innerHTML = `<h1 class="id${i}">${scoring[i]}</h1>`;
  }
}

function add(id) {
  let score = document.querySelector(`.id${id}`).innerHTML
  let scoreSet = JSON.parse(localStorage.getItem('score'))

  document.querySelector(`.id${id}`).innerHTML = parseInt(score) + 1

  scoreSet[id] = parseInt(score) + 1
  localStorage.setItem('score', JSON.stringify(scoreSet))
}

function del(id) {
  let score = document.querySelector(`.id${id}`).innerHTML
  let scoreSet = JSON.parse(localStorage.getItem('score'))

  if (score - 1 <= 0) {
    document.querySelector(`.id${id}`).innerHTML = 0
    scoreSet[id] = 0
  } else {
    document.querySelector(`.id${id}`).innerHTML = parseInt(score) - 1
    scoreSet[id] = parseInt(score) - 1
  }

  localStorage.setItem('score', JSON.stringify(scoreSet))
}

function resetScore() {
  let confirmText = 'Are you sure to reset the score?'

  if (confirm(confirmText) == true) {
    alert('Your Scores have been cleared.')
    
    for (let i = 0; i < 5; i++) {
      teamScore[i].innerHTML = `<h1 class="id${i}">0</h1>`;
    }
  
    localStorage.setItem("score", JSON.stringify(scoreSetup));
  }
}