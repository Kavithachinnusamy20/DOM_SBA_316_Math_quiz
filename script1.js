const form = document.querySelector('form');
const input = document.getElementById('input');
let score1 = document.getElementById('score');
const resetButton = document.getElementById('resetButton');
const quizchoiceElement = document.getElementById('quizchoice');
const questionElement = document.getElementById('question');

// Use valid HTML tags

let AnswersQuestions = document.createElement('p');
// AnswersQuestions.id = 'Answer';
let wrongQuestions = document.createElement('p');


let selectedQuizOption = "E"; //Default to Easy
//form
const quizArray = [
    'Math Quiz Easy',
    'Math Quiz Medium',
    'Math Quiz Hard',

];




// Create radio option for favorite Quiz;  Create radio button and adding the radio button to Div.
quizArray.forEach((array, index) => {
    // console.log(array)
    const radio1 = document.createElement('input');
    radio1.type = "radio";
    radio1.name = "quizOption";
    radio1.value = array;
    radio1.id = 'QuizOption_' + index;

    const label = document.createElement('label');
    label.textContent = array;

    quizchoiceElement.appendChild(radio1);
    quizchoiceElement.appendChild(label);
    quizchoiceElement.appendChild(document.createElement('br'));

    radio1.addEventListener('click', function () {
        if (this.checked) {

            if (this.id == 'QuizOption_0') {
                selectedQuizOption = 'E';
            } else if (this.id == 'QuizOption_1') {
                selectedQuizOption = 'M';
            } else if (this.id == 'QuizOption_2') {
                selectedQuizOption = 'H';
            }
            randomNumberQuiz();
        }
    });

});


// function to generate quiz question based on Quiz level (Easy/Medium/Hard)
function randomNumberQuiz() {
    // console.log("selectedQuizOption :" + selectedQuizOption);
    let multiplier = 0
    if (selectedQuizOption == "E") {  // Easy
        multiplier = 10;
    } else if (selectedQuizOption == "M") {   // Medium
        multiplier = 15;
    } else if (selectedQuizOption == "H") {  // Hard
        multiplier = 25;
    }

    let num1 = Math.floor(Math.random() * multiplier);
    let num2 = Math.floor(Math.random() * multiplier);
    questionElement.innerText = `What is ${num1} Multiply by ${num2}?`;
    return num1 * num2;

}

// calling the quiz function with Quiz type as Easy by default. 
let correctAnswer = randomNumberQuiz();


AnswersQuestions.innerText = 'Answers :';
wrongQuestions.innerText = 'Mistakes :';

// Append elements correctly
form.appendChild(AnswersQuestions);
form.appendChild(wrongQuestions);
// add style
AnswersQuestions.style.color = "blue";
wrongQuestions.style.color = "blue";
score1.classList.add('display');


// Score tracking

let score = 0;
let Answers = 0;
let Mistake = 0;

score1.innerHTML = "Number of questions : " + score;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let userAnswer = input.value;
    if (correctAnswer == userAnswer) {
        score++;
        Answers++;
    }
    else {
        score++;
        Mistake++;

    }

    correctAnswer = randomNumberQuiz("E");
    input.value = '';

    score1.innerHTML = "Number of questions : " + score;
    AnswersQuestions.innerHTML = "Answers :" + Answers;
    wrongQuestions.innerHTML = "Mistakes :" + Mistake;


    // reset after 10 Questions. 
    if (score == 10) {
        window.alert("Good Job! Your score is " + Answers + " out of " + score);
        score = 0;
        Answers = 0;
        Mistake = 0;
        score1.innerHTML = "Number of questions : " + score;
        AnswersQuestions.innerHTML = "Answers :" + Answers;
        wrongQuestions.innerHTML = "Mistakes :" + Mistake;
    }


}

);

// Add event listener to reset the quiz
resetButton.addEventListener('click', function (e) {

    e.preventDefault();
    score1.innerHTML = "Number of questions : 0";
    AnswersQuestions.innerHTML = "Answers :0";
    wrongQuestions.innerHTML = "Mistakes :0";
});




