// variables of the elements in the index.html
var startQuiz = document.getElementById('startQuiz')
var infoBox = document.getElementById('infoBox')
var quizBox = document.getElementById('quizBox')
var timer = document.getElementById('timer')

//answer and question varibales
var question = document.getElementById('question')
var solution1 = document.getElementById('answers1')
var solution2 = document.getElementById('answers2')
var solution3 = document.getElementById('answers3')
var solution4 = document.getElementById('answers4')

//listens for start button click
startQuiz.addEventListener('click', startTest)

//sets the quiz box display to none to hide it until test starts
quizBox.style.display = "none";

var secondsLeft = 60;

//start the test button.
//turns on and off the start information and the quiz box
function startTest() {
    infoBox.style.display = "none";
    quizBox.style.display = "";
    setTimer();
    loadQuiz ()
    }

// this the timing function 
function setTimer() {
    var clock = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(clock);
        }
    }, 1000);
}

var currentQuiz = 0;

function loadQuiz () {
    var currentQuizData = answersQuestions[currentQuiz];
    question.innerText = currentQuizData.question
    solution1.textContent = currentQuizData.answer1
    solution2.innerText = currentQuizData.answer2
    solution3.innerText = currentQuizData.answer3
    solution4.innerText = currentQuizData.answer4
}


//array cotanins questions and answers
var answersQuestions = [{
    question: 'Which tag is used to create a blank line in HTML?',
    answer1: '<b>',
    answer2: '<br>',
    answer3: '<a>',
    answer4: '<em>',
    correct: 'answer2',
},
{
    question: 'In CSS what does the unit vh stand for?',
    answer1: 'viewport height',
    answer2: 'valued height',
    answer3: 'variable height',
    answer4: 'var h',
    correct: 'answer1',
},
{
    question: 'Which JavaScript method is used to write into an alert box?',
    answer1: 'window.alertHTML()',
    answer2: 'window.alertBox()',
    answer3: 'window.alert()',
    answer4: 'window.alertContent()',
    correct: 'answer3',
},
{
    question: 'How many keywords are there in JavaScript to declare variables or constants?',
    answer1: '<1>',
    answer2: '<2>',
    answer3: '<3>',
    answer4: '<4>',
    correct: 'answer3',
},
{
    question: 'Which of the following element is responsible for making the text bold in HTML?',
    answer1: '<i>',
    answer2: '<a>',
    answer3: '<br>',
    answer4: '<b>',
    correct: 'answer4',
}]