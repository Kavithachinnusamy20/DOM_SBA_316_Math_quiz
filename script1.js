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


function randomNumberQuiz(quizType) {

    let multiplier = 0
    if (quizType = "M") {   // Medium
        multiplier = 10;
    } else if (quizType = "H") {  // Hard
        multiplier = 100;
    }

    let num1 = Math.floor(Math.random() * multiplier);
    let num2 = Math.floor(Math.random() * multiplier);

    // let correctAnswer = mediumNum1 * mediumNum1;

    questionElement.innerText = `What is ${num1} Multiply by ${num2}?`;
}

// wrongQuestions.id = 'wrong';
randomNumberQuiz('H');





//form
const quizArray = [
    'Math Quiz Medium',
    'Math Quiz Hard'
];
quizArray.forEach((array, index) => {
    // console.log(array)
    const radio1 = document.createElement('input');
    radio1.type = "radio";
    radio1.name = "Choice 1";
    radio1.value = array;
    radio1.id = 'QuizOption_' + index;

    const label = document.createElement('label');
    label.textContent = array;

    quizchoiceElement.appendChild(radio1);
    quizchoiceElement.appendChild(label);
    quizchoiceElement.appendChild(document.createElement('br'));

})



AnswersQuestions.innerText = 'Answers :';
wrongQuestions.innerText = 'Mistakes :';

// Append elements correctly
form.appendChild(AnswersQuestions);
form.appendChild(wrongQuestions);
// add style
AnswersQuestions.style.color = "Green";
wrongQuestions.style.color = "Red";
score1.classList.add('display');



// Ensure wrongQuestions is placed after AnswersQuestions
// AnswersQuestions.insertAdjacentElement('afterend', wrongQuestions);


// Score tracking

let score = 0;
let Answers = 0;
let Mistake = 0;

score1.innerHTML = "Number of questions : " + score;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let userAnswer = +input.value;
    if (correctAnswer == userAnswer) {
        score++;
        Answers++;

    }
    else {
        score++;
        Mistake++;

    }
    score1.innerHTML = "Number of questions : " + score;
    AnswersQuestions.innerHTML = "Answers1:" + Answers;
    wrongQuestions.innerHTML = "Mistakes1:" + Mistake;

    num1 = Math.ceil(Math.random() * (max - min + 1)) + min;


    num2 = Math.ceil(Math.random() * (max - min + 1)) + min;
    correctAnswer = num1 * num2;
    questionElement.innerText = `What is ${num1} Multiply by ${num2}?`;
    input.value = '';

    if (score == 10) {
        window.alert("You are successfully completed your Quiz !. Try again");

    }

}

);
// Get the reset button


// Add event listener to reset the game or form
resetButton.addEventListener('click', function (e) {

    e.preventDefault();

    // Reset game variables


    // Update UI elements
    score1.innerHTML = "Number of questions :0 ";
    AnswersQuestions.innerHTML = "Answers: 0";
    wrongQuestions.innerHTML = "Mistakes: 0";

    // Generate a new question
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    correctAnswer = num1 * num2;
    questionElement.innerText = `What is ${num1} multiplied by ${num2}?`;

    // // Clear input field
    // input.value = '';

});




