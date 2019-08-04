
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;








// When the user presses a key, it will run the following function...
document.onkeypress = function(event) {

  var genieChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log
  var userGuess = event.key;

  

  

  if(userGuess === genieChoice){
      wins++;
      guesses = 10; 
      
      
      
    
  }
  else{
      guesses--;
  }

  if(guesses === 0){
      losses++;
      guesses = 10; 
  }

  

  if(losses === 10){
      alert("You're no psychic. Refresh to try again!")
  }

  if(wins === 10){
    alert("You're a psychic. Refresh to try again!")
}



  document.getElementById('wins').innerHTML = "Wins: " + wins;
  document.getElementById('losses').innerHTML = "Losses: " + losses;
  document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
  

};
