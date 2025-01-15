function checkAnswers() {
    const answers = { q1: "a", q2: "b", q3: "c" }; // Correct answers
    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let key in answers) {
        const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
        if (userAnswer && userAnswer.value === answers[key]) {
            score++;
        }
    }

    alert(`You got ${score} out of ${totalQuestions} correct.`);
}
