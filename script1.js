const questionElement = document.getElementById('question');
let num1 = Math.floor(Math.random() * 10);

let num2 = Math.floor(Math.random() * 10);
let correctAnswer = num1 * num2;
questionElement.innerText = `What is ${num1} Multiply by ${num2}?`;

const form = document.getElementById('form');
const input = document.getElementById('input');
let score1 = document.getElementById('score');
// Get the reset button
const resetButton = document.getElementById('resetButton');



// Use valid HTML tags

let AnswersQuestions = document.createElement('p');
// AnswersQuestions.id = 'Answer';

let wrongQuestions = document.createElement('p');
// wrongQuestions.id = 'wrong';

AnswersQuestions.innerText = 'Answers :';
wrongQuestions.innerText = 'Mistakes :';

// Append elements correctly
form.appendChild(AnswersQuestions);
form.appendChild(wrongQuestions);
// add style
AnswersQuestions.style.color = "Green";
wrongQuestions.style.color = "Red";


// Ensure wrongQuestions is placed after AnswersQuestions
AnswersQuestions.insertAdjacentElement('afterend', wrongQuestions);
// console.log(score1.innerHTML);

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
    AnswersQuestions.innerHTML = "Answers:" + Answers;
    wrongQuestions.innerHTML = "Mistakes:" + Mistake;

    num1 = Math.floor(Math.random() * 10);

    num2 = Math.floor(Math.random() * 10);
    correctAnswer = num1 * num2;
    questionElement.innerText = `What is ${num1} Multiply by ${num2}?`;
    input.value = '';



}

);
// Get the reset button


// Add event listener to reset the game or form
resetButton.addEventListener('click', function () {
    // Reset game variables
    score = 0;
    Answers = 0;
   Mistake = 0;

    // Update UI elements
    score1.innerText = `Score: ${score}`;
    AnswersQuestions.innerText = `Answers: ${Answers}`;
    wrongQuestions.innerText = `Mistake: ${Mistake}`;
    
    // Generate a new question
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    correctAnswer = num1 * num2;
    questionElement.innerText = `What is ${num1} multiplied by ${num2}?`;

    // Clear input field
    input.value = '';
});

// function updateScore() {
//     localStorage.setItem("score",String(score));
// }
// //division quiz
// const questionElement1 =document.getElementById('question1');
// let num3 =Math.floor(Math.random()*100);

// let num4=Math.floor(Math.random()*100);
// let correctquotient =num3-num4;
// questionElement1.innerText = `What is ${num3} subtract by ${num4}?`;

// let score2 = Number(localStorage.getItem("score1"));
// if(!score1) {
//     score1 = 0;
// }
// score.textcontent ='score :${score1}';
// form.addEventListener('submit',function(){
//     let userAnswer =+input.value;
//     if(correctAnswer==userAnswer){
//         score1++;
//         updateScore();
//     }
//         else {
//          score1--;
//           updateScore();

//         }
//     }
// );

// function updateScore() {
//     localStorage.setItem("score1",String(score));
// }