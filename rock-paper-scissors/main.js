var div = document.querySelector('#buttons');
var chosenOne;
var computerAnswer;
var startGame = document.getElementById('startGame');
var p = document.getElementById('results');
var userChoice = document.getElementById('userChoice');

div.addEventListener('click', function(e){
  chosenOne = e.target.id;
  userChoice.textContent = "Your choice: " + chosenOne;
})

startGame.addEventListener('click', function(){
  p.textContent = game();
});

function generateAnswer() {
  var randomNumber = Math.random();
  if (randomNumber <= 0.33){
    computerAnswer = "rock";
  }
  else if (randomNumber <= 0.66){
    computerAnswer = "paper";
  }
  else {
    computerAnswer = "scissors";
  }
  return computerAnswer;
}

function game(){
  generateAnswer();
  if (chosenOne == computerAnswer){
    return "Tie! Rematch?";
  }
  else if(chosenOne == 'paper'){
    if (computerAnswer == 'rock'){
      return "Paper beats rock! You win!";
    }
    else {
      return "Scissors beats paper! You lose!";
    }
  }
  else if(chosenOne == 'rock'){
    if (computerAnswer == 'scissors'){
      return "Rock beats scissors! You win!";
    }
    else {
      return "Paper beats rock! You lose!";
    }
  }
  else if(chosenOne == 'scissors'){
    if (computerAnswer == 'paper'){
      return "Scissors beats paper! You win!";
    }
    else {
      return "Rock beats scissors! You lose!"
    }
  }
}
