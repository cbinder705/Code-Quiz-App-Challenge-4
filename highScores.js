var highScore = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");
var allScores = localStorage.getItem("allScores"); // saves scores to local
allScores = JSON.parse(allScores);

if (allScores !== null) {
  for (var i = 0; i < allScores.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent = allScores[i].initials + " " + allScores[i].score;
    highScore.appendChild(createLi);
  }
}

goBack.addEventListener("click", function () {
  // sends user back to start page
  window.location.replace("./index.html");
});
