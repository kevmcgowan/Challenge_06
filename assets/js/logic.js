// GLOBAL
var button = document.querySelector('#start');
var questionsWrapper = document.querySelector('#questions');
var startScreen = document.querySelector('#start-screen');
var questionTitle = document.querySelector('#question-title');
var choicesOutput = document.querySelector('#choices');
var endScreen = document.querySelector('#end-screen');
var message = document.querySelector('#message');
var finalScore = document.querySelector('#final-score');
var enterInitials = document.querySelector('#initials');
var currentQuestionIndex = 0;
var time = 60; 
var audioCorrect = new Audio("assets/sfx/correct.wav");
var audioIncorrect = new Audio("assets/sfx/incorrect.wav");
var intervalHandler;

// START BUTTON
button.addEventListener('click', showQuizContent);

// START TIMER AND SHOW QUESTIONS
function showQuizContent (event){
    questionsWrapper.style.display = 'block';
    startScreen.style.display = 'none';

    // SET TIMER ON START BUTTON CLICK
    var countdownEl = document.getElementById('time');

    // updateCountdown();
    
    // intervalHandler = 
    setInterval(updateCountdown, 1000);
    
    function updateCountdown () {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
    
        countdownEl.innerHTML = `${seconds}`
            
        if (time > 0) {
        time--;
        }
    
        if (time === 0) {
            questionsWrapper.style.display = 'none';
            endScreen.style.display = 'block';
        }
    }
    
    showQuestionSet();
}


//FUNCTION TO LOOP THROUGH QUESTIONS
function showQuestionSet() {
        
    var currentQuestion = questionSet[currentQuestionIndex];

    questionTitle.innerText = '';

    questionTitle.innerText = currentQuestion.title;

    var choices = currentQuestion.choices;

    choicesOutput.innerHTML = '';

    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        var isCorrect = currentQuestion.answer === choice;

        choicesOutput.insertAdjacentHTML('beforeend', `
        <button data-correct=${isCorrect}>${choice}</button>`)
    }
}

//ADD EVENT LISTENER TO CHOICES OUTPUT
choicesOutput.addEventListener('click', checkAnswer);

//FUNCTION TO CHECK ANSWER CORRECT
function checkAnswer(event){
    if (event.target.dataset.correct === "true"){
        audioCorrect.play();
        nextQuestion();
    }
    else {
        audioIncorrect.play();
        time -= 10;
        nextQuestion();
    }
}

//FUNCTION TO DISPLAY NEXT QUESTION
function nextQuestion() {  
    if (currentQuestionIndex < questionSet.length-1){
        currentQuestionIndex++;
        showQuestionSet();
    }
    else {
        questionsWrapper.style.display = 'none';
        endScreen.style.display = 'block';
        finalScore.innerHTML = time;
        finalScore = time;
        time = 0;
    }
}

//PUT INITIALS AND SCORE INTO LOCAL STORAGE

var submitButton = document.querySelector('#submit');

submitButton.addEventListener("click", sendToStorage);

function sendToStorage(){
    var intls = document.querySelector('#initials');
    var value = intls.value;

    var userData = [
        {
        initials: value,
        score: finalScore
        }
    ];

localStorage.setItem("highScoresData", JSON.stringify(userData)) 
}
