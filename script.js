var score = 0;
var questionDatabase = [
  {
    name: "JavaScript is one of the few languages that run in a ____________",
    choices: ["Smart Phone", "Dumb Phone", "Web Browser", "Marathon"],
    answer: "Web Browser",
  },

  {
    name: "What does API stand for? ",
    choices: [
      "Apple Product Instruction",
      "Application Programming Interface",
      "Application Programming Interference",
      "Apple Pie Installation",
    ],
    answer: "Application Programming Interface",
  },

  {
    name: "What does CSS stand for? ",
    choices: [
      "Cascading Style Sheets",
      "Cascading Style Software",
      "Correct Color Scheme",
      "Color Correcting Software",
    ],
    answer: "Cascading Style Sheets",
  },

  {
    name: "Inside of which element do we place the link to our Javascript file? ",
    choices: ["<javascript>", "<sscript>", "<JSCRIPT>", "<script>"],
    answer: "<script>",
  },

  {
    name: "The condition in an if/else statement is enclosed with ___________ ",
    choices: ["quotes", "parenthesis", "curly brackets", "square brackets"],
    answer: "parenthesis",
  },
];

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
// generates quiz
function render(questionIndex) {
  questionsContainer.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questionDatabase.length; i++) {
    var userQuestion = questionDatabase[questionIndex].name;
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
function compare(event) {
  var element = event.target;
  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    if (element.textContent == questionDatabase[questionIndex].answer) {
      score++;
      createDiv.textContent = "You're Right!";
    } else {
      secondsLeft = secondsLeft - penalty;
      createDiv.textContent = "Nope!";
    }
  }
  questionIndex++;

  if (questionIndex >= questionDatabase.length) {
    gameOver();
    createDiv.textContent =
      "You answered " +
      score +
      "/" +
      questionDatabase.length +
      " questions correctly.";
  } else {
    render(questionIndex);
  }
  questionsContainer.appendChild(createDiv);
}
function gameOver() {
  questionsContainer.innerHTML = "";
  currentTime.innerHTML = "";
  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "GameOver!";
  questionsContainer.appendChild(createH1);
  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");
  questionsContainer.appendChild(createP);

  if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var createP2 = document.createElement("p");
    clearInterval(holdInterval);
    createP.textContent = "Your final score is: " + timeRemaining;

    questionsContainer.appendChild(createP2);
  }

  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = " Please enter your initials: ";

  questionsContainer.appendChild(createLabel);

  var createInput = document.createElement("input"); // prompts input for user initials
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";

  questionsContainer.appendChild(createInput);

  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit"); // generates submit button to push scores
  createSubmit.textContent = "Submit";

  questionsContainer.appendChild(createSubmit);

  createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

    var finalScore = {
      initials: initials,
      score: timeRemaining,
    };
    var allScores = localStorage.getItem("allScores"); // handles storage of user scores
    if (allScores === null) {
      allScores = [];
    } else {
      allScores = JSON.parse(allScores);
    }
    allScores.push(finalScore);
    var newScore = JSON.stringify(allScores);
    localStorage.setItem("allScores", newScore);
    window.location.replace("./highScores.html");
  });
}
