let turn = 0

function chooseRock() {
  if (turn % 2 === 0) {
    document
      .querySelector('.player-1-img')
      .setAttribute('src', './pics/Rock.jpg')
  } else {
    document
      .querySelector('.player-2-img')
      .setAttribute('src', './pics/Rock.jpg')
  }
  turn++
}
function choosePaper() {
  if (turn % 2 === 0) {
    document
      .querySelector('.player-1-img')
      .setAttribute('src', './pics/Paper.jpg')
  } else {
    document
      .querySelector('.player-2-img')
      .setAttribute('src', './pics/Paper.jpg')
  }
  turn++
}
function chooseScissors() {
  if (turn % 2 === 0) {
    document
      .querySelector('.player-1-img')
      .setAttribute('src', './pics/Scissors.jpg')
  } else {
    document
      .querySelector('.player-2-img')
      .setAttribute('src', './pics/Scissors.jpg')
  }
  turn++
}

function whoWon() {
  const player1Choice = document.querySelector('.player-1-img')
  const player2Choice = document.querySelector('.player-2-img')
  const winner = document.querySelector('h2')

  if (player2Choice.includes('placeholder')) {
    return
  } else if (player1Choice === player2Choice) {
    winner.textContent = 'Tie!'
  } else if (
    player1Choice.includes('rock') &&
    player2Choice.includes('scissors')
  ) {
    winner.textContent = 'Player 1 Wins!'
  } else if (
    player1Choice.includes('paper') &&
    player2Choice.includes('rock')
  ) {
    winner.textContent = 'Player 1 Wins!'
  } else if (
    player1Choice.includes('scissors') &&
    player2Choice.includes('paper')
  ) {
    winner.textContent = 'Player 1 Wins!'
  } else {
    winner.textContent = 'Player 2 Wins!'
  }
}

function main() {
  document.querySelector('li #rock').addEventListener('click', chooseRock)

  document.querySelector('li #paper').addEventListener('click', choosePaper)

  document
    .querySelector('li #scissors')
    .addEventListener('click', chooseScissors)
}

document.addEventListener('DOMContentLoaded', main)
