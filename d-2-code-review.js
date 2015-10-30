var score = 0;

var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");
var ans5 = document.getElementById("answer5");
var ans6 = document.getElementById("answer6");

function firstQuestion() {
  var question1 = prompt("Is my nationality South Korean, yes or no?").toLowerCase();
  if (question1 === "yes") {
  ans1.innerHTML = "Incorrect! My nationality is American.";
  ans1.className = 'red';
  } else if (question1 === "no") {
  ans1.innerHTML = "Correct! I am not South Korean." + '<br><img style="height:200px; width:200px;" src="img/tacodog.jpg">';
  ans1.className = 'green';
  score++;
  } else {
  ans1.innerHTML = "Sorry! " + question1 + " That is not one of the listed answers.";
  }
}
setTimeout(firstQuestion, 1000);

function secondQuestion() {
  var question2 = prompt("Is my favorite superhero, spiderman, yes or no?").toLowerCase();
  if (question2 === "yes") {
  ans2.innerHTML = "Correct! My favorite superhero is indeed, spiderman" + '<br><img style="height:200px; width:200px;" src="img/tacodog.jpg">';
  ans2.className = 'green';
  score++;
  } else if (question2 === "no") {
  ans2.innerHTML = "Incorrect! Spiderman is in fact my favorite superhero.";
  ans2.className = 'red';
  } else {
  ans2.innerHTML = "Sorry! " + question2 + " That is not one of the listed answers.";
  }
}

setTimeout(secondQuestion, 1050);

function thirdQuestion() {
  var question3= prompt("Do I have a younger brother, yes or no?").toLowerCase();
  if (question3 === "yes") {
  ans3.innerHTML = "Incorrect! However, I do have an older brother.";
  ans3.className = 'red';
  } else if (question3 === "no") {
  ans3.innerHTML = "Correct! I do not have a younger brother." + '<br><img style="height:200px; width:200px;" src="img/tacodog.jpg">';
  ans3.className = 'green';
  score++
  } else {
  ans3.innerHTML = "Sorry! " + question3 + " That is not one of the listed answers.";
  }
}

setTimeout(thirdQuestion, 1100);

function fourthQuestion() {
  var question4= prompt("Am I legally an adult in age, yes or no?");
  if (question4 === "yes") {
  ans4.innerHTML = "Correct! I am 20 years old." + '<br><img style="height:200px; width:200px;" src="img/tacodog.jpg">';
  ans4.className = 'green';
  score++
  } else if (question4 === "no") {
  ans4.innerHTML = "Incorrect! I am actually 20 years of age, two years over the legal age.";
  ans4.className = 'red';
  } else {
  ans4.innerHTML = "Sorry! " + question4 + " That is not one of the listed answers.";
  }
}

setTimeout(fourthQuestion, 1150);

function fifthQuestion() {
  var question5= prompt("Am I a sports fanatic, yes or no?");
  if (question5 === "yes") {
  ans5.innerHTML = "Incorrect! I do not watch or play a lot of sports." ;
  ans5.className = 'red';
  } else if (question5 === "no") {
  ans5.innerHTML = "Correct! I am not a sports fanatic." + '<br><img style="height:200px; width:200px;" src="img/tacodog.jpg">';
  ans5.className = 'green';
  score++;
  } else {
  ans5.innerHTML = "Sorry! " + question5 + " That is not one of the listed answers.";
  }
}
setTimeout(fifthQuestion, 1200);





function sixthQuestion() {
  var question6= prompt("Do I like playing video games, yes or no?");
  if (question6 === "yes") {
  ans6.innerHTML = "Correct! I absolutely love playing video games." + '<br><img style="height:200px; width:200px;" src="img/tacodog.jpg">';
  score++;
  ans6.className = 'green';
 } else if (question6 === "no") {
  ans6.innerHTML = "Incorrect! I love to play video games.";
  ans6.className = 'red';
  } else {
  ans6.innerHTML = "Sorry! " + question6 + " That is not one of the listed answers.";

  }
  alert("You got " + score + " correct answers out of 6!");
}

setTimeout(sixthQuestion, 1250);

  



