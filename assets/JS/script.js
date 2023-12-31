// variables of the elements in the index.html
var startQuiz = document.getElementById('startQuiz')
var infoBox = document.getElementById('infoBox')
var quizBox = document.getElementById('quizBox')
var timer = document.getElementById('timer')
var result = document.getElementById('result')
var highscores = document.getElementById('highscores')
var score = document.getElementById('score')
var scoreboard = document.getElementById('finalScore')
var submit = document.getElementById('submit')
var restartQuiz = document.getElementById('restartQuiz')
var tableBody = document.getElementById('tableBody')


//answer and question varibales
var question = document.getElementById('question')
var solution1 = document.getElementById('answers1')
var solution2 = document.getElementById('answers2')
var solution3 = document.getElementById('answers3')
var solution4 = document.getElementById('answers4')

//listens for start button click
startQuiz.addEventListener('click', startTest)

//listens for which solution is clicked 
solution1.addEventListener('click', selectAnswer)
solution2.addEventListener('click', selectAnswer)
solution3.addEventListener('click', selectAnswer)
solution4.addEventListener('click', selectAnswer)

//listens for name submission
submit.addEventListener('click', nameInput)

//listens to whether the restart button is clicked
restartQuiz.addEventListener('click', restart)

//this amount of time for the quiz
var secondsLeft = 61;
var points = 0;
//allows for the clock variable to be cleared in other functions
var clock;

//this restarts the program at the end of the quiz
function restart () {
    location.reload();
}

//sets the highscore display to not appear from when teh page is loaded
highscores.style.display = "none";

//sets the quiz box display to none to hide it until test starts
quizBox.style.display = "none";

//set the scoreboard to hidden
scoreboard.style.display = "none";

//start the test button.
//turns on and off the start information and the quiz box
function startTest() {
    infoBox.style.display = "none";
    quizBox.style.display = "";
    setTimer();
    loadQuiz ()
}

// this is the timing function 
function setTimer() {
     clock = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(clock);
            highscores.style.display = "";
            quizBox.style.display = "none";
            var lowscore = 0;
            score.textContent = lowscore;
        }
    }, 800);
}

//controls the index of the answerQuestions array
var currentQuiz = 0;

//this loads the questions and answers into the page from the array
function loadQuiz () {
    var currentQuizData = answersQuestions[currentQuiz];
    question.innerText = currentQuizData.question
    solution1.textContent = currentQuizData.answer1
    solution2.innerText = currentQuizData.answer2
    solution3.innerText = currentQuizData.answer3
    solution4.innerText = currentQuizData.answer4
}

//check as to whether the selected answer is correct or not
function selectAnswer(event) {
    var selectedButton = event.target;
    var currentQuizData = answersQuestions[currentQuiz];
  
    if (selectedButton.id === currentQuizData.correct) {
    // this function flashes green if the answer is correct
    selectedButton.style.backgroundColor = "green";
    setTimeout(function() {
      selectedButton.style.backgroundColor = "";
    }, 500);
    } else {
    // this function flashes red if the answer is incorrect
    selectedButton.style.backgroundColor = "red";
    setTimeout(function() {
      selectedButton.style.backgroundColor = "";
    }, 500);
    // this takes 10 seconds off the timer if answer is incorrect
      var penalty = 10;
      secondsLeft = secondsLeft - penalty; 
    }
    // Move to the next question in array
    currentQuiz++;
    if (currentQuiz < answersQuestions.length) {
      loadQuiz();
    } else {
      // displays the highscore at the end of the quiz
      score.textContent = secondsLeft;
      highscores.style.display = "";
      quizBox.style.display = "none";
      clearInterval(clock);
    }
  }

  //takes in users initials for the scoreboard and saves it, forces user to add initials and cannot enter empty value
  function nameInput(){
    var userName = document.getElementById('name').value;
    if(userName === ''){
        window.alert("Please type your initials")
    } else {
    highscores.style.display = "none";
    scoreboard.style.display = "";
    // this stores the userData as an object of both initials and score of the player to be later displayed 
    var storedDataString = localStorage.getItem('userData');
    var storedData = storedDataString ? JSON.parse(storedDataString) : [];
    var userData = {name: userName, score: secondsLeft};
    storedData.push(userData);
    var updatedDataString = JSON.stringify(storedData);
    localStorage.setItem('userData', updatedDataString);
    }
}

// this function is trying to retrive it 
  function displayScore(){
    var storedDataString = localStorage.getItem('userData');
    var storedData = storedDataString ? JSON.parse(storedDataString) : [];
    // this function orders the local storage data scores from high to low with the sort method
    storedData.sort(function(a, b) {
        return b.score - a.score;
      });
    //loops through the stored scores and names and populates the table
    for (var i = 0; i < storedData.length; i++) {
        var userData = storedData[i];
        var userName = userData.name;
        var userScore = userData.score;
        
        // creates a table row 
        var row = document.createElement('tr');

        // creates the name cell
        var nameCell = document.createElement('td');
        nameCell.textContent = userName;
        row.appendChild(nameCell);

        // creates the score cell
        var scoreCell = document.createElement('td');
        scoreCell.textContent = userScore;
        row.appendChild(scoreCell);

        // this append the row to the table body
        tableBody.appendChild(row);
     }
}
displayScore();

//array cotanins questions and answers
var answersQuestions = [{
    question: 'Which tag is used to create a blank line in HTML?',
    answer1: '<b>',
    answer2: '<br>',
    answer3: '<a>',
    answer4: '<em>',
    correct: 'answers2',
},
{
    question: 'In CSS what does the unit vh stand for?',
    answer1: 'viewport height',
    answer2: 'valued height',
    answer3: 'variable height',
    answer4: 'var h',
    correct: 'answers1',
},
{
    question: 'Which JavaScript method is used to write into an alert box?',
    answer1: 'window.alertHTML()',
    answer2: 'window.alertBox()',
    answer3: 'window.alert()',
    answer4: 'window.alertContent()',
    correct: 'answers3',
},
{
    question: 'How many keywords are there in JavaScript to declare variables or constants?',
    answer1: '<5>',
    answer2: '<3>',
    answer3: '<2>',
    answer4: '<8>',
    correct: 'answers2',
},
{
    question: 'Which of the following element is responsible for making the text bold in HTML?',
    answer1: '<i>',
    answer2: '<a>',
    answer3: '<br>',
    answer4: '<b>',
    correct: 'answers4',
}]