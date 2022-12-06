var getHighScores = localStorage.getItem("highScoresData") || '[]';

getHighScores = JSON.parse(getHighScores);

document.getElementById("highscores").innerHTML = `
<ol>
  <li>${getHighScores[0].initials} - ${getHighScores[0].score}</li>
</ol>
`;

var clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", clearScores);

function clearScores() {
  document.getElementById("highscores").innerHTML = "";
  localStorage.clear();
}
