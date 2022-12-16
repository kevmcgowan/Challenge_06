var getHighScores = localStorage.getItem('highScoresData') || '[]';
getHighScores = JSON.parse(getHighScores);

// var getHighScores = JSON.parse(localstorage.getItem('highScoresData') || '[]');

document.querySelector('#highscores').innerHTML = `
<ol>
  <li>${getHighScores[0].initials} - ${getHighScores[0].score}</li>
</ol>
`;

// $(document).ready(function(){
//   $('#submit').click(function(){
//     var getHighScores = $('span[id=final-score]').val;
//     var init = $('input[id=initials]').val;

//     $('ol').append('<li>' + highScore + init + '</li>');})
// })

var clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', clearScores);

function clearScores() {
  document.querySelector('#highscores').innerHTML = '';
  localStorage.clear();
}
