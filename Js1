function checkAnswers() {
    var questions = document.querySelectorAll('.question');
    var correctCount = 0;

    questions.forEach(function (question, index) {
        var options = question.querySelectorAll('input[type="radio"]');
        options.forEach(function (option) {
            if (option.checked) {
                if (option.value === 'correct') {
                    question.style.backgroundColor = 'lightgreen';
                    correctCount++;
                } else {
                    question.style.backgroundColor = 'lightcoral';
                }
            }
        });
    });

    document.getElementById('popup').style.display = 'block';
    document.querySelector('#popup p').textContent = correctCount + ' Right';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
