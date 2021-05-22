let turn = 0

function whoWon() {
  const player1Choice = document.querySelector('.player-1-img')

  const player2Choice = document.querySelector('.player-2-img')

  const winner = document.querySelector('.header h2')
  console.log('Howdy')
  if (player2Choice.equals('Placeholder')) {
    console.log('Not yet applicable')
    return
  }
  if (player1Choice.getAttribute('alt') === player2Choice.getAttribute('alt')) {
    console.log('tie')
    winner.textContent = 'Tie!'
  } else if (player1Choice.equals('Rock')) {
    if (player2Choice.equals('Scissors') || player2Choice.equals('Lizard')) {
      winner.textContent = 'Player 1 Wins!'
    } else {
      winner.textContent = 'Player 2 Wins!'
    }
  } else if (player1Choice.equals('Paper')) {
    if (player2Choice.equals('Rock') || player2Choice.equals('Spock')) {
      winner.textContent = 'Player 1 Wins!'
    } else {
      winner.textContent = 'Player 2 Wins!'
    }
  } else if (player1Choice.equals('Scissors')) {
    if (player2Choice.equals('Lizard') || player2Choice.equals('Paper')) {
      winner.textContent = 'Player 1 Wins!'
    } else {
      winner.textContent = 'Player 2 Wins!'
    }
  } else if (player1Choice.equals('Lizard')) {
    if (player2Choice.equals('Spock') || player2Choice.equals('Paper')) {
      winner.textContent = 'Player 1 Wins!'
    } else {
      winner.textContent = 'Player 2 Wins!'
    }
  } else if (player1Choice.equals('Spock')) {
    if (player2Choice.equals('Rock') || player2Choice.equals('Scissors')) {
      winner.textContent = 'Player 1 Wins!'
    } else {
      winner.textContent = 'Player 2 Wins!'
    }
  }
}
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
  whoWon()
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
  whoWon()
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
  whoWon()
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
  whoWon()
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
  whoWon()
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
