alert("Are you ready to play?");

var score = 0;

var ans1 = document.getElementId("answer1");
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
var ans2 = document.getElementId("answer2");
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

var ans3 = document.getElementId("answer3");
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

var ans4 = document.getElementId("answer4");
var question4= prompt("Am I legally an adult in age, yes or no?");

if (question4 === "yes") {
alert("Correct! I am 20 years old.");
console.log("The user answered with yes");
score++
} else if (question4 === "no") {
alert("Incorrect! I am actually 20 years of age, two years over the legal age.");
console.log("The user answered with no");
} else {
alert("Sorry! " + question4 + " That is not one of the listed answers.");
}

var ans5 = document.getElementId("answer5");
var question5= prompt("Am I a sports fanatic, yes or no?");

if (question5 === "yes") {
alert("Incorrect! I do not watch or play a lot of sports.");
console.log("The user answered with yes");
} else if (question5 === "no") {
alert("Correct! I am not a sports fanatic.");
console.log("The user answered with no");
score++
} else {
alert("Sorry! " + question5 + " That is not one of the listed answers.");
}

var ans6 = document.getElementId("answer6");
var question6= prompt("Do I like playing video games, yes or no?");

if (question6 === "yes") {
alert("Correct! I absolutely love playing video games.");
console.log("The user answered with yes");
score++
} else if (question6 === "no") {
alert("Incorrect! I love to play video games.");
console.log("The user answered with no");
} else {
alert("Sorry! " + question6 + " That is not one of the listed answers.");
}


alert("You got " + score + " correct answers out of 6!");
