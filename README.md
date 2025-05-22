# DOM_SBA_316_Math_quiz
# DOM_SBA_316_Math_quiz
# DOM_SBA_316_Math_quiz
1. DOM Selection
- The script starts by selecting   HTML elements using document.querySelector() and document.getElementById(), ensuring they can be manipulated dynamically.
 2.Quiz Options Creation
- A quizArray holds different  difficulty levels (Easy, Medium, Hard).
-  Radio buttons are generated dynamically using document.createElement('input'), allowing users to select a difficulty level.
- When a user clicks a radio button,  event  listener updates the selectedQuizOption variable and calls favoriteQuiz() to generate a new question.
3.Generating Quiz Questions
- favoriteQuiz() selects a multiplier based on difficulty level:
-  Easy: Numbers up to 10
-  Medium: Numbers up to 15
- Hard: Numbers up to 25
- Two random numbers (num1 and num2) are generated using Math.floor(Math.random() * multiplier).
-  The multiplication question is displayed dynamically.
4. Answer Submission & Score Tracking

- The form listens for a submit event.
-  The user's answer is checked against the correct answer.
- If correct, Answers count increases.
-  If incorrect, Mistake count increases.
- score tracks total questions answered.
-  After 10 questions, an alert displays the final score and resets the quiz
5. Reset Button
 Clicking the reset button clears all scores and restarts the quiz# DOM_SBA_316_Math_quiz
