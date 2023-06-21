const time = document.querySelector('#time')

const params = new URLSearchParams(window.location.search)

const min = (params.get('min') != '') ? params.get('min') : undefined
const sec = (params.get('sec') != '') ? params.get('sec') : undefined

// min -> sec | sec -> ms transformation
var newSec = (parseInt(min) * 60) + parseInt(sec)
let userMS = newSec * 1000

let timer = setInterval(function () {
  let timerMin = Math.floor((userMS % (1000 * 60 * 60)) / (1000 * 60)).toString()
  let timerSec = Math.floor((userMS % (1000 * 60)) / 1000).toString()

  if (userMS < 0) {
    time.innerHTML = `<div class="timeContainer">
  <h1 style="transform: scale(2, 2);">
    Time UP!
  </h1>
</div>`
  } else {
    time.innerHTML = `<div class="timeContainer">
  <h1 style="transform: scale(2, 2);">
    ${(timerMin.length < 2) ? 0 + timerMin : timerMin} : ${(timerSec.length < 2) ? 0 + timerSec : timerSec}
  </h1>
</div>`
  }

  userMS = userMS - 1000
}, 1000)