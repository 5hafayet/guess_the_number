'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent =
        message;
}


document.querySelector('.check').addEventListener('click', function () {
  const x = Number(document.querySelector('.guess').value);
  console.log(x);
  if (!x) {
    document.querySelector('.message').textContent = '⚡ No Input';
  }
    // if correct
  if (x === secretNumber) {
      displayMessage('✌️✌️ Congratulations ✌️✌️');
  }
  //if small
  else if (x < secretNumber) {
    if (Math.abs(x - secretNumber) > 5)
      displayMessage('⬇️⬇️ Too Small');
    else document.querySelector('.message').textContent = '⬇️ Small';
  }
  //if large
  else if (x > secretNumber) {
    if (Math.abs(x - secretNumber) > 5)
      displayMessage('⬆️⬆️ Too Big');
    else displayMessage('⬆️ Big');
  }
  else {
      displayMessage('😑 Invalid Input 😑');
  }
    
   // score update
    if (x === secretNumber) {
        if (score > highscore)
            highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('body').style.backgroundColor = '#1fd655';
document.querySelector('.number').textContent = secretNumber;
    }
    else {
        document.querySelector('.score').textContent = --score;
        if (score === 0) {
            document.querySelector('body').style.backgroundColor='#f00'
            document.querySelector('.message').textContent =
                '😥 You Lost the Game ... 😥';
            score = 20;
        }
    }
});

// Game Restarts
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '';
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent='?';

})
