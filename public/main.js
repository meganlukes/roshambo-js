let turn = 0

function whoWon() {
  const player1Choice = document.querySelector('.player-1-img')

  const player2Choice = document.querySelector('.player-2-img')

  let winner = document.querySelector('.header h2')
  console.log('Howdy')

  if (player2Choice.getAttribute('alt') === 'Placeholder') {
    console.log('Not yet applicable')
  } else if (
    player1Choice.getAttribute('alt') === player2Choice.getAttribute('alt')
  ) {
    console.log('tie')
    winner.textContent = 'Tie!'
  } else if (player1Choice.getAttribute('alt') === 'Rock') {
    if (
      player2Choice.getAttribute('alt') === 'Scissors' ||
      player2Choice.getAttribute('alt') === 'Lizard'
    ) {
      winner.textContent = 'Player 1 Wins!'
      console.log('Rock beats scissors/lizard')
    } else {
      winner.textContent = 'Player 2 Wins!'
      console.log('2 beats rock')
    }
  } else if (player1Choice.getAttribute('alt') === 'Paper') {
    if (
      player2Choice.getAttribute('alt') === 'Rock' ||
      player2Choice.getAttribute('alt') === 'Spock'
    ) {
      console.log('paper beats Spock/rock')
      winner.textContent = 'Player 1 Wins!'
    } else {
      winner.textContent = 'Player 2 Wins!'
      console.log('2 beats paper')
    }
  } else if (player1Choice.getAttribute('alt') === 'Scissors') {
    if (
      player2Choice.getAttribute('alt') === 'Lizard' ||
      player2Choice.getAttribute('alt') === 'Paper'
    ) {
      winner.textContent = 'Player 1 Wins!'
      console.log('scissors  beats lizard/paper')
    } else {
      winner.textContent = 'Player 2 Wins!'
      console.log('2 beats scissors')
    }
  } else if (player1Choice.getAttribute('alt') === 'Lizard') {
    if (
      player2Choice.getAttribute('alt') === 'Spock' ||
      player2Choice.getAttribute('alt') === 'Paper'
    ) {
      winner.textContent = 'Player 1 Wins!'
      console.log('lizard beats spock/paper')
    } else {
      winner.textContent = 'Player 2 Wins!'
      console.log('2 beats lizard')
    }
  } else if (player1Choice.getAttribute('alt') === 'Spock') {
    if (
      player2Choice.getAttribute('alt') === 'Rock' ||
      player2Choice.getAttribute('alt') === 'Scissors'
    ) {
      winner.textContent = 'Player 1 Wins!'
      console.log('spock beats rock/scissors')
    } else {
      winner.textContent = 'Player 2 Wins!'
      console.log('2 beats spock')
    }
  }
}
function chooseRock() {
  if (turn % 2 === 0) {
    document
      .querySelector('.player-1-img')
      .setAttribute('src', './pics/Rock.jpg')
    document.querySelector('.player-1-img').setAttribute('alt', 'Rock')
    whoWon()
  } else {
    document
      .querySelector('.player-2-img')
      .setAttribute('src', './pics/Rock.jpg')
    document.querySelector('.player-2-img').setAttribute('alt', 'Rock')
    whoWon()
  }
  turn++
}
function choosePaper() {
  if (turn % 2 === 0) {
    document
      .querySelector('.player-1-img')
      .setAttribute('src', './pics/Paper.jpg')
    document.querySelector('.player-1-img').setAttribute('alt', 'Paper')
    whoWon()
  } else {
    document
      .querySelector('.player-2-img')
      .setAttribute('src', './pics/Paper.jpg')
    document.querySelector('.player-2-img').setAttribute('alt', 'Paper')
    whoWon()
  }
  turn++
}
function chooseScissors() {
  if (turn % 2 === 0) {
    document
      .querySelector('.player-1-img')
      .setAttribute('src', './pics/Scissors.jpg')
    document.querySelector('.player-1-img').setAttribute('alt', 'Scissors')
    whoWon()
  } else {
    document
      .querySelector('.player-2-img')
      .setAttribute('src', './pics/Scissors.jpg')
    document.querySelector('.player-2-img').setAttribute('alt', 'Scissors')
    whoWon()
  }
  turn++
}
function chooseLizard() {
  if (turn % 2 === 0) {
    document
      .querySelector('.player-1-img')
      .setAttribute('src', './pics/Lizard.jpg')
    document.querySelector('.player-1-img').setAttribute('alt', 'lizard')
    whoWon()
  } else {
    document
      .querySelector('.player-2-img')
      .setAttribute('src', './pics/Lizard.jpg')
    document.querySelector('.player-2-img').setAttribute('alt', 'lizard')
    whoWon()
  }
  turn++
}
function chooseSpock() {
  if (turn % 2 === 0) {
    document
      .querySelector('.player-1-img')
      .setAttribute('src', './pics/Spock.jpg')
    whoWon()
  } else {
    document
      .querySelector('.player-2-img')
      .setAttribute('src', './pics/Spock.jpg')
    document.querySelector('.player-2-img').setAttribute('alt', 'Spock')
    whoWon()
  }
  turn++
}

function main() {
  document.querySelector('li #rock').addEventListener('click', chooseRock)

  document.querySelector('li #paper').addEventListener('click', choosePaper)

  document
    .querySelector('li #scissors')
    .addEventListener('click', chooseScissors)

  document.querySelector('li #lizard').addEventListener('click', chooseLizard)

  document.querySelector('li #spock').addEventListener('click', chooseSpock)
}

document.addEventListener('DOMContentLoaded', main)
