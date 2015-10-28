alert("Are you ready to play?");

var score = 0;

var question1 = prompt("Is my nationality South Korean, yes or no?").toLowerCase();

if (question1 === "yes") {
alert("Incorrect! My nationality is American.");
console.log("The user answered with yes");
} else if (question1 === "no") {
alert("Correct! I am not South Korean.");
console.log("The user answered with no");
score++
} else {
alert("Sorry! " + question1 + " That is not one of the listed answers.");
}

var question2 = prompt("Is my favorite superhero, spiderman, yes or no?").toLowerCase();

if (question2 === "yes") {
alert("Correct! My favorite superhero is indeed, spiderman");
console.log("The user answered with yes");
score++
} else if (question2 === "no") {
alert("Incorrect! Spiderman is in fact my favorite superhero.");
console.log("The user answered with no");
} else {
alert("Sorry! " + question2 + " That is not one of the listed answers.");
}

var question3= prompt("Do I have a younger brother, yes or no?").toLowerCase();

if (question3 === "yes") {
alert("Incorrect! However, I do have an older brother.");
console.log("The user answered with yes");
} else if (question3 === "no") {
alert("Correct! I do not have a younger brother.");
console.log("The user answered with no");
score++
} else {
alert("Sorry! " + question3 + " That is not one of the listed answers.");
}

alert("You got " + score + " correct answers out of 3!");