let turn = 0
//Let player 1 choose and assign picture to their list item
function chooseRock() {
  var newPic = document.getElementsByTagName('img').rock
  if (turn % 2 === 0) {
    var playerImg = 
  } else {
    const player2picture = document.querySelector('.player2 image')
  }
  turn++
}
function choosePaper() {
  if (turn % 2 === 0) {
    const player1Picture = document.querySelector('.player1 img')
  } else {
    const player2picture = document.querySelector('.player2 img')
  }
}
function chooseScissors() {
  if (turn % 2 === 0) {
    const player1Picture = document.querySelector('.player1 img')
  } else {
    const player2picture = document.querySelector('.player2 img')
  }
}
//Formula to determine who won using codewars example

function main() {
  document.querySelector('li.rock').addEventListener('click', chooseRock)
}

document.addEventListener('DOMContentLoaded', main)
