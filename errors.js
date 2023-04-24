// getting comfortable with error messages

// syntax errors
let rank = "Imperator";
let name = "Furiosa";
// console.log(rank name);
console.log(rank, name);
// added the conma to fix this error

// trickier syntax errors
// if (5 > 10) {
//console.log("Impossible!");

//console.log("Phew, logical fallacies avoided.");
if (5 > 10) {
  console.log("Impossible!");
}
console.log("Phew, logical fallacies avoided.");
// here there was a missing curly bracket on the third line

// reference errors
//var firstName = "Jane";
//var lastName = "Doe";

//console.log(firstName, lasName);
let firstName = "Jane";
let lastName = "Doe";

console.log(firstName, lastName);
// last name was mispelled on the last line

// type errors
// var favouriteMeal = "BREAKFAST";

// console.log(favouriteMeal.toLower());
let favouriteMeal = "BREAKFAST";

console.log(favouriteMeal.toLowerCase());
// Google search for something like javascript convert string to lowercase
// we find we were using the wrong .thing to convert the string
// it should be .toLowerCase


// As we've seen, there's a general pattern to fixing code errors. We have to read the error message closely and carefully,
//then inspect the suspicious line of code for typos, syntax errors or other mistakes. In some cases we may quickly find what
//we did wrong, in others we may have to look for help on the Internet or with our cohort mates or mentors. While we'll never
//fully be able to avoid introducing errors in our code, with time and experience we'll become better and better at fixing them.