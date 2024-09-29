const rollButton = document.getElementById('rollButton');
const restartButton = document.getElementById('restartButton');
const dice = document.getElementById('dice');
const resultDisplay = document.getElementById('result');
const diceImage = document.getElementById('diceImage');

rollButton.addEventListener('click', rollDice);
restartButton.addEventListener('click', resetGame);

function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1; // Roll a number between 1 and 6
    dice.textContent = diceValue; // Display the rolled number
    diceImage.src = `dice${diceValue}.png`; // Update the image source to match the rolled number

    resultDisplay.textContent = `You rolled a ${diceValue}!`;

    rollButton.style.display = 'none';
    restartButton.style.display = 'block';
}

function resetGame() {
    dice.textContent = '1';
    diceImage.src = 'dice1.png'; // Reset the image to the initial state
    resultDisplay.textContent = '';
    rollButton.style.display = 'block';
    restartButton.style.display = 'none';
}
