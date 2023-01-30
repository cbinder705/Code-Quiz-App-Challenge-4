var highScore = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");
var getAllScores = localStorage.getItem("allScores"); // saves scores to local
getAllScores = JSON.parse(getAllScores);

if (getAllScores !== null) {
  for (var i = 0; i < getAllScores.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent =
      getAllScores[i].initials + " " + getAllScores[i].score;
    highScore.appendChild(createLi);
  }
}

goBack.addEventListener("click", function () {
  // sends user back to start page
  window.location.replace("./index.html");
});
