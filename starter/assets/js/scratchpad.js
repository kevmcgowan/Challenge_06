


// var time = 60;


// var countdown = setInterval(function() {
//     document.body.innerText = time;
//     time--; 
//     if (time < 0){
//         clearInterval(countdown);
//     };
// }, 1000 );

var currentQuestionIndex = 0;
var questionWrap = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choicesOutput = document.querySelector('#choices');
var startQuizfunc = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');



function startQuiz() {
    var currentQuestion = questions[currentQuestionIndex];
    var choices = currentQuestion.choices;

    questionTitle.innerText = currentQuestion.title;

    choicesOutput.innerHTML = '';

    for(i= 0; i < choices.length; i++) {
        var choice = choices[i];
        var isCorrect = currentQuestion.answer === choice;

        choicesOutput.insertAdjacentHTML('beforeend', `
        <button data-correct=${isCorrect}>${choice}</button>
        `)
    }
    questionWrap.classList.remove('hide');
}

function checkAnswer(event) {
    console.log(event.target);
}

// startQuiz.addEventListener('click', startQuiz);
choicesOutput.addEventListener('click',checkAnswer);

startQuiz();
