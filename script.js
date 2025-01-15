function checkAnswers() {
    const answers = { q1: "a", q2: "b", q3: "c" }; // Correct answers

    for (let key in answers) {
        const options = document.querySelectorAll(`input[name="${key}"]`);
        options.forEach((option) => {
            const label = option.parentElement;

            // Reset previous styles
            label.classList.remove("correct", "incorrect");

            if (option.checked) {
                if (option.value === answers[key]) {
                    label.classList.add("correct"); // Add green border for correct
                } else {
                    label.classList.add("incorrect"); // Add red border for incorrect
                }
            }
        });
    }
}
