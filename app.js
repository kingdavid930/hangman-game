var sportsNames = ['kobe', 'shaq','magic'];
var random =Math.floor(Math.random()*(sportsNames.length));
console.log(random)

var currentWord = sportsNames[random]
console.log(currentWord)

//create of array of blanks spaces
//change random words to array
//put array of letters in where the underscores are in html
//onkeyup function to see if it is a good guess or bad guess
//if its a good guess, than put on the guess word
//if its a bad guess than show letters of bad guesses 
//if bad guess than goes from 9 letters remaining to 8 
// reset button to start a new game