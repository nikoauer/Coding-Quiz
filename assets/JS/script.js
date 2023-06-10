// variables of the elements in the index.html
var startQuiz = document.getElementById('startQuiz')
var infoBox = document.getElementById('infoBox')
var quizBox = document.getElementById('quizBox')

//listens for start button click
startQuiz.addEventListener('click', startTest)

//sets the quiz box display to none to hide it until test starts
quizBox.style.display = "none";
//start the test button.
//turns on and off the start information and the quiz box
function startTest() {
    infoBox.style.display = "none";
    quizBox.style.display = "";
    }