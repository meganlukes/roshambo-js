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
function chooseLizard() {
  if (turn % 2 === 0) {
    document
      .querySelector('.player-1-img')
      .setAttribute('src', './pics/Lizard.jpg')
    document.querySelector('.player-1-img').setAttribute('alt', 'lizard')
  } else {
    document
      .querySelector('.player-2-img')
      .setAttribute('src', './pics/Lizard.jpg')
    document.querySelector('.player-2-img').setAttribute('alt', 'lizard')
  }
  turn++
}
function chooseSpock() {
  if (turn % 2 === 0) {
    document
      .querySelector('.player-1-img')
      .setAttribute('src', './pics/Spock.jpg')
  } else {
    document
      .querySelector('.player-2-img')
      .setAttribute('src', './pics/Spock.jpg')
  }
  turn++
}

function whoWon() {
  const player1Choice = document
    .querySelector('.player-1-img')
    .getAttribute('alt')
  const player2Choice = document.querySelector('.player-2-img')
  const winner = document.querySelector('h2')

  if (player2Choice.includes('placeholder')) {
    return
  }
  if (player1Choice === player2Choice) {
    winner.textContent = 'Tie!'
  } else if (player1Choice.includes('rock')) {
    if (
      player2Choice.includes('scissors') ||
      player2Choice.includes('lizard')
    ) {
      winner.textContent = 'Player 1 Wins!'
    } else {
      winner.textContent = 'Player 2 Wins!'
    }
  } else if (player1Choice === paper) {
    if (player2Choice === rock || player2Choice === Spock) {
      winner.textContent = 'Player 1 Wins!'
    } else {
      winner.textContent = 'Player 2 Wins!'
    }
  } else if (player1Choice === scissors) {
    if (player2Choice === lizard || player2Choice === paper) {
      winner.textContent = 'Player 1 Wins!'
    } else {
      winner.textContent = 'Player 2 Wins!'
    }
  } else if (player1Choice === lizard) {
    if (player2Choice === spock || player2Choice === paper) {
      winner.textContent = 'Player 1 Wins!'
    } else {
      winner.textContent = 'Player 2 Wins!'
    }
  } else if (player1Choice === spock) {
    if (player2Choice === rock || player2Choice === scissors) {
      winner.textContent = 'Player 1 Wins!'
    } else {
      winner.textContent = 'Player 2 Wins!'
    }
  }
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
