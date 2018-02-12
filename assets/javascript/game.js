alert("Test");

var letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//This holds the chosen letters of the user
var guessedLetters = []; 

//Global Variables
var winsCount = 0;
var lossesCount =0;
var guessesLeft = 9;

//This is what the user picks
var userInput = "";

//allows the computer to select a random letter
var computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];

 console.log("Wins: " + winsCount + "Losses: " + lossesCount + "Guesses Left: " + guessesLeft + "Your Guesses so far: " + guessedLetters + "Computer Choice: " + computerChoice);

//Functions 

//When key is released, this function runs. 
 document.onkeyup = function(event) {
     var userInput = event.key;

// When user presses a key, it should populate in the html site. 
 document.onkeyup = function(event) {
        var letterPicked = String.fromCharCode(event.keyCode).toLowerCase(); 
        document.getElementById("userguesses").innerHTML= "Your Guesses so far: " + userInput;

    }
    //If user input equals to computer choice, then increase the win count by 1. Otherwise, Your guesses left decreases by 1. 
     if (userInput === computerChoice) {
         winsCount ++;
     } else {
         guessesLeft --;
     }
    
     //If guesses left = 0, then the Losses will increase by 1. 
     if (guessesLeft === 0){
         lossesCount++
     }
 }


 //This gets my element from my html and adds the java functions to it
 document.getElementById("wins1").innerHTML = "Wins: " + winsCount;
 document.getElementById("losses1").innerHTML = "Losses " + lossesCount;
 document.getElementById("guesses1").innerHTML=  "Guesses Left: " + guessesLeft;

 

