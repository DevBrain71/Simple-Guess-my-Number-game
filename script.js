'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct number!!';

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 18;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // If the user doesn't input any number
  if (!guess) {
    // document.querySelector('.message').textContent = 'NO NUMBER!⛔';
    displayMessage('NO NUMBER!⛔');
  }
  // If the user guess is equal to the secret number
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'CORRECT NUMBER!🎉🎉';
    displayMessage('CORRECT NUMBER!🎉🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // If the user input a number that is higher than the secret number
      guess > secretNumber
        ? // ? (document.querySelector('.message').textContent = 'TOO HIGH!📈')
          displayMessage('TOO HIGH!📈')
        : // If the user input a number that is lower than the secret number
          // (document.querySelector('.message').textContent = 'TOO LOW!📉');
          displayMessage('TOO LOW!📉');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // If user has used up chnces and score is zero
    else {
      // document.querySelector('.message').textContent = 'You lost the Game! 🙄';
      displayMessage('You lost the Game! 🙄');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
