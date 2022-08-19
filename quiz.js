const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-button")
const outputText = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "85°", "10°", "a + b + c", "no", "45°"];

submitAnswerBtn.addEventListener('click', calculateScore);

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let entry of formResults.values()) {
        if (entry == correctAnswers[index]) {
            score++;
        }
        index++;
    }
    outputText.innerText = "Your score is : " + score;

}