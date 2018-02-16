//alert("Test");

var letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//This holds the chosen letters of the user
var guessedLetters = []; 

//Global Variables
var winsCount = 0;
var lossesCount =0;
var guessesLeft = 9;

//This is what the user picks/guesses
var userInput = "";

//allows the computer to select a random letter
//var computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];

 //FUNCTIONS



var computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];

//If user input equals to computer choice, then increase the win count by 1. Then, the number of remaining guesses left (guessesLeft) gets reset as well as the letters that the user has already guessed(guessedLetters). The computer will then pick another letter. 

 document.onkeyup = function(event) {
     var userInput = String.fromCharCode(event.keyCode).toLowerCase();
     console.log(userInput);
     console.log(computerChoice);
     //.push adds the element to the array
     guessedLetters.push(userInput);
     console.log(guessedLetters);
     document.getElementById("userguesses").innerHTML= "Your Guesses so far: " + guessedLetters.join(' , ');
     if (userInput == computerChoice) {
         winsCount++;
         console.log("Yay! You won!");
         alert("Woohoo! You Won!");
         guessedLetters = [];
         guessesLeft = 9;
         computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
        //  computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
            console.log("Wins: " + winsCount + "Losses: " + lossesCount + "Guesses Left: " + guessesLeft + "Your Guesses so far: " + guessedLetters + "Computer Choice: " + computerChoice);
            

        //  document.querySelector("#wins1").innerHTML = "Wins: " + winsCount;
        document.getElementById("wins1").innerHTML = "Wins: " + winsCount;
     }

      // //If guesses left = 0, then the Losses will increase by 1. Then, the number of remaining guesses left (guessesLeft) gets reset as well as the letters that the user has already guessed(guessedLetters). And then the computer will begin to pick another letter. 

     else if (guessesLeft == 0) {
         lossesCount++;
         console.log("You lost :( Try again!");
         alert("Boo. Let\s try again");
         guessedLetters = [];
         guessesLeft = 9;
         computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
            console.log("Wins: " + winsCount + "Losses: " + lossesCount + "Guesses Left: " + guessesLeft + "Your Guesses so far: " + guessedLetters + "Computer Choice: " + computerChoice);

         document.getElementById("losses1").innerHTML = "Losses: " + lossesCount;
     }
     else if (userInput !== computerChoice) {
         guessesLeft--;

         document.getElementById("guesses1").innerHTML=  "Guesses Left: " + guessesLeft;
     }
 }
            
 

