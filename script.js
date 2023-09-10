const buttons = document.querySelectorAll('.cell');
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const checkWinner = () => {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      buttons[a].classList.add('winning-cell');
      buttons[b].classList.add('winning-cell');
      buttons[c].classList.add('winning-cell');
      return gameBoard[a];
    }
  }
  if (!gameBoard.includes('')) {
    return 'draw';
  }
  return null;
};

const updateGameStatus = () => {
  const winner = checkWinner();
  if (winner === 'X' || winner === 'O') {
    alert(`${winner} wins!`);
    gameActive = false;
  } else if (winner === 'draw') {
    alert('It\'s a draw!');
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
};

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (gameActive && !button.classList.contains('clicked')) {
      button.value = currentPlayer;
      button.classList.add('clicked'); // Add a class to mark it as clicked
      button.disabled = true; // Disable the button after it's clicked

      gameBoard[index] = currentPlayer;

      updateGameStatus();
    }
  });
});


