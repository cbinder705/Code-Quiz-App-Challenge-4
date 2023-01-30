var score = 0;
var questionDatabase = [
  {
    title: "JavaScript is one of the few languages that run in a ____________",
    choices: ["Smart Phone", "Dumb Phone", "Web Browser", "Marathon"],
    answer: "Web Browser",
  },

  {
    title: "What does API stand for? ",
    choices: [
      "Apple Product Instruction",
      "Application Programming Interface",
      "Application Programming Interference",
      "Apple Pie Installation",
    ],
    answer: "Application Programming Interface",
  },

  {
    title: "What does CSS stand for? ",
    choices: [
      "Cascading Style Sheets",
      "Cascading Style Software",
      "Correct Color Scheme",
      "Color Correcting Software",
    ],
    answer: "Cascading Style Sheets",
  },

  {
    title:
      "Inside of which element do we place the link to our Javascript file? ",
    choices: ["<javascript>", "<sscript>", "<JSCRIPT>", "<script>"],
    answer: "<script>",
  },

  {
    title:
      "The condition in an if/else statement is enclosed with ___________ ",
    choices: ["quotes", "parenthesis", "curly brackets", "square brackets"],
    answer: "parenthesis",
  },
];

var score = 0;
var questionIndex = 0; // keeps track of which question the user is on
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsContainer = document.querySelector("#questionsContainer");
var wrapper = document.querySelector("#wrapper");
var secondsLeft = 60;
var holdInterval = 0;
var penalty = 10; // penalty for incorrect answer
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      secondsLeft--;
      currentTime.textContent = "Time: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        gameOver();
        currentTime.textContent = "Time's up!";
      }
    }, 1000);
  }
  render(questionIndex);
});

function render(questionIndex) {
  questionsContainer.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questionDatabase.length; i++) {
    var userQuestion = questionDatabase[questionIndex].title;
    var userChoices = questionDatabase[questionIndex].choices;
    questionsContainer.textContent = userQuestion;
  }
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsContainer.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}
