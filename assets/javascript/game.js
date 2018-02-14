alert("Test");

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
var computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];

 console.log("Wins: " + winsCount + "Losses: " + lossesCount + "Guesses Left: " + guessesLeft + "Your Guesses so far: " + guessedLetters + "Computer Choice: " + computerChoice);


 //FUNCTIONS



//This array holds the incorrect letters that the user has been guessing.
 var incorrectLetter = [];

 // When user presses a key, it should populate in the html site. 
 document.onkeyup = function(event) {
        var letterPicked = String.fromCharCode(event.keyCode).toLowerCase(); 
    
         //push the letterpicked into array of incorrect letters 
        incorrectLetter.push(letterPicked);
        console.log(incorrectLetter);

        document.getElementById("userguesses").innerHTML= "Your Guesses so far: " + incorrectLetter.join(' , ');

        if (guessedLetters.indexOf(userInput) < 0 && letterChoices.indexOf(userInput)  >= 0) {
           guessedLetters[guessedLetters.length]=userGuess;
           guessesLeft--;
        }
  


    
        
        //If user input equals to computer choice, then increase the win count by 1. Then, the number of remaining guesses left (guessesLeft) gets reset as well as the letters that the user has already guessed(guessedLetters). The computer will then pick another letter. 

         if (userInput == computerChoice) {
             winsCount ++;
            console.log("Yay! You won!");
            guessedLetters = [];
            guessesLeft = 9;
            computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
            console.log("Wins: " + winsCount + "Losses: " + lossesCount + "Guesses Left: " + guessesLeft + "Your Guesses so far: " + guessedLetters + "Computer Choice: " + computerChoice);

        } 

        

          
        //If guesses left = 0, then the Losses will increase by 1. Then, the number of remaining guesses left (guessesLeft) gets reset as well as the letters that the user has already guessed(guessedLetters). And then the computer will begin to pick another letter. 

         if (guessesLeft == 0){
            lossesCount++;
            console.log("You lost :( Try again!");
            guessedLetters = [];
            guessesLeft = 9;
            computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
            console.log("Wins: " + winsCount + "Losses: " + lossesCount + "Guesses Left: " + guessesLeft + "Your Guesses so far: " + guessedLetters + "Computer Choice: " + computerChoice);

        }
 


     //This gets my element from my html and adds the java functions to it
     document.getElementById("wins1").innerHTML = "Wins: " + winsCount;
     document.getElementById("losses1").innerHTML = "Losses: " + lossesCount;
     document.getElementById("guesses1").innerHTML=  "Guesses Left: " + guessesLeft;

         
         document.querySelector("#wins1").innerHTML = "Wins: " + winsCount;

 
}
