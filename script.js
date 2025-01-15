// All chapters answers
const chapterAnswers = {
    chapter1: { q1: "a", q2: "b", q3: "c" },
    chapter2: { q1: "b", q2: "c", q3: "a" },
    chapter3: { q1: "d", q2: "a", q3: "b" }
};

function checkAnswers(chapter) {
    const answers = chapterAnswers[chapter]; // Select the correct chapter's answers
    if (!answers) {
        console.error("Answers for the chapter not found!");
        return;
    }

    let correctCount = 0;

    for (let key in answers) {
        const options = document.querySelectorAll(`input[name="${key}"]`);
        options.forEach((option) => {
            const label = option.parentElement;

            // Reset previous styles
            label.classList.remove("correct", "incorrect");

            if (option.checked) {
                if (option.value === answers[key]) {
                    label.classList.add("correct"); // Green border for correct
                    correctCount++; // Increment correct count
                } else {
                    label.classList.add("incorrect"); // Red border for incorrect
                }
            }
        });
    }

    // Display the result in the popup
    showPopup(correctCount);
}

function showPopup(correctCount) {
    const totalQuestions = 3; // Number of questions in this chapter
    const resultMessage = `You answered ${correctCount} out of ${totalQuestions} questions correctly.`;
    document.getElementById("resultMessage").innerText = resultMessage;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
