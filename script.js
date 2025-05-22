const quizArray = [
  {
    question: "What is 9 + 6?",
    options: ["13", "14", "15", "16"],
    correctIndex: 2
  },
  {
    question: "What is 7 × 8?",
    options: ["54", "56", "58", "60"],
    correctIndex: 1
  },
  {
    question: "What is 100 ÷ 25?",
    options: ["2", "3", "4", "5"],
    correctIndex: 3
  },
  {
    question: "What is 12 − 7?",
    options: ["4", "5", "6", "7"],
    correctIndex: 1
  },
  {
    question: "What is 3²?",
    options: ["6", "9", "12", "15"],
    correctIndex: 1
  }
]
// quiz iteration
function quiz(){
  // random sort questions
  quizArray.sort(()=>Math.random()-.5);
}
// generate quiz
for(let i of quizArray){
  i.options.sort(()=>Math.random()-.5);
}


