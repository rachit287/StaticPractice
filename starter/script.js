'use strict';

//document.querySelector('.number').textContent = 13;

let rand = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const x = Number(document.querySelector('.guess').value);
  console.log(x, typeof x);
  let y = Number(document.querySelector('.score').textContent);

  //When there is no input
  if (!x) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (x === rand) {
    //when player wins
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = rand;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore)
    {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (x > rand) {
    //when the score is too high
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } //when the score is too low
  else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});



document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    rand = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
});
