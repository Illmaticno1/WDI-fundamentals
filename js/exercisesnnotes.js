
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);

if (x % 3 === 0 && x % 5 === 0){
	result = "fizzbuzz";
}
else if (x % 3 === 0){
	result = "fiizz"
}
else if (x % 5 === 0){
	result = "buzz";
}
else {
	result = x;
}
// console.log("Up and running!");



//SWITCH STATEMENT

// day of the week in a number, Sunday is 0, Saturday is 6
var dayNumber = 1;

if(dayNumber === 0){
    day = 'Sunday';
} else if(dayNumber === 1) {
    day = 'Monday';
} else if(dayNumber === 2) {
    day = 'Tuesday';
} else if(dayNumber === 3) {
    day = 'Wednesday';
} else if(dayNumber === 4) {
    day = 'Thursday';
} else if(dayNumber === 5) {
    day = 'Friday';
} else if(dayNumber === 6) {
    day = 'Saturday';
} else {
    day = null;
    alert('wrong value for day');
}

var dayNumber = 1;
switch (dayNumber) {
case 0:
  day = 'Sunday';
  break;
case 1:
  day = 'Monday';
  break;
case 2:
  day = 'Tuesday';
  break;
case 3:
  day = 'Wednesday';
  break;
case 4:
  day = 'Thursday';
  break;
case 5:
  day = 'Friday';
  break;
case 6:
  day = 'Saturday';
  break;
default:
  day = null;
  alert('wrong value for day');
}

//TERNARY STATEMENT

var temperature = 55;
var typeOfExercise;

if(temperature >= 45){
	typeOfExercise = "Go for a run outside";
} else {
	typeOfExercise = "Go to the gym";
}

//SINGLE LINE TERNARY STATEMENT

var temperature = 55;
var typeOfExercise;

var typeOfExercise = temperature >= 45 ? "Go for a run outside" : "Go to the gym";

typeOfExercise;
// => "Go for a run outside."



//TEST (write example as ternary statement)

var movieCategory = "scary";
var isMovieKidFriendly;

if (movieCategory === "scary" || movieCategory === "violent") {
    isMovieKidFriendly = "Pick a different movie.";
} else {
    isMovieKidFriendly = "Movie is kid-friendly.";
}

isMovieKidFriendly;
// => "Pick a different movie."


var movieCategory = "scary";
var isMovieKidFriendly;

var isMovieKidFriendly = movieCategory === "scary" || movieCategory === "violent" ? "pick a different movie." : "Movie is kid-friendly.";

isMovieKidFriendly;



// ANSWER

var favoriteMovie = "star wars";
var moviePhrase;

switch (favoriteMovie){
  case "jaws":
    moviePhrase = "You're gonna need a bigger boat.";
    break;
  case "the shining":
    moviePhrase = "All work and no play makes Jack a dull boy.";
    break;
  case "star wars":
    moviePhrase = "Do. Or do not. There is no try.";
    break;
  case "forrest gump":
    moviePhrase = "Life is like a box of chocolates.";
    break;
  case "back to the future":
    moviePhrase = "Where we're going, we dont need roads.";
    break;
  default:
    moviePhrase = "Great movie choice!";
}

// PART 2 OF TEST 


var hasEmptySquares = false;
var answersAreCorrect = true;
var message;

// If hasEmptySquares is equal to false and answersAreCorrect is equal to true 
       // message ="Crossword puzzle complete!"; 
 // Otherwise 
       // message = "Not quite!";

/*
 ex. of single line ternary statement 
var typeOfExercise = temperature >= 45 ? "Go for a run outside" : "Go to the gym";
*/

var message = hasEmptySquares === false && answersAreCorrect === true ? "Crossword puzzle complete!" : "Not quite!";


//ARRAYS

var myNumbers = [4, 65, 0, 29];
myNumbers[0];
myNumbers[1] = 10;
myNumbers[2] = 5;
myNumbers[1] = 2 * 2;
console.log(myNumbers);

// finding the length of an array

['John', 'Paul', 'Mary'].length;
// => 3

var numbers = [10, 20, 30, 40];
numbers.length;
// => 4

//ADDING AND REMOVING ITEMS FROM AN ARRAY

var ghosts = ['blinky', 'inky', 'pinky'];
ghosts.push('clyde');
ghosts;
// => ['blinky', 'inky', 'pinky', 'clyde']

ghosts.pop();
ghosts;
// => ['blinky', 'inky', 'pinky']

var iceCreamFlavors = ['chocolate', 'vanilla', 'strawberry', 'rocky road'];

iceCreamFlavors.length;
// => 4

iceCreamFlavors[0] = "mint chip";
// => ['mint chip', 'vanilla', 'strawberry', 'rocky road'];

iceCreamFlavors.pop;
// => ['mint chip', 'vanilla', 'strawberry'];

iceCreamFlavors.push("butter pecan");
console.log(iceCreamFlavors);
// // => ['mint chip', 'vanilla', 'strawberry', 'butter pecan'];


// LOOPS

//WHILE LOOP

var totalLaps = 0;

  while (totalLaps < 10) {
    console.log('Swim Another lap!');
    totalLaps += 1;
  }

  //FOR LOOPS

  for (var i = 0; i < 5; i += 1) {
  // do something 5 times.
}

//ITERATING OVER AN ARRAY

var students = ["Mark", "Melissa", "Noopur", "Olga", "Vivek"];

// Loop over the array of students
for (var i = 0; i < students.length; i += 1) {
    // Greet each student by name
    console.log("Hello " + students[i]);
}

//EXERCISE (This time, your challenge is to loop through every number from 1 to max, applying those exact same rules to each number and, before ending the loop, printing the result out in the console using the command console.log(result);.
//For reference, if max is 20, the following should be displayed in the console:)

var max = 20;

for (var x = 0; x <= max; x += 1){
		if (x % 3 === 0 && x % 5 === 0){
		result = "fizzbuzz";
	}
	else if (x % 3 === 0){
		result = "fiizz"
	}
	else if (x % 5 === 0){
		result = "buzz";
	}
	else {
		result = x;
	}
	console.log(result);

}









