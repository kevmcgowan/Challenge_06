var getHighScores = localStorage.getItem("highScoresData") 
|| '[]'; getHighScores = JSON.parse(getHighScores);

document.querySelector("#highscores").innerHTML = `
<ol>
  <li>${getHighScores[0].initials} - ${getHighScores[0].score}</li>
</ol>
`;

var clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", clearScores);

function clearScores() {
  document.querySelector("#highscores").innerHTML = "";
  localStorage.clear();
}
