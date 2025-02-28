let currentQuestion = 1;
let score = 0;
let totalQuestions = 15;

function checkAnswer(questionNumber, selectedOption) {
    let correctAnswers = {
        1: 2,
        2: 3,
        3: 1,
        4: 2,
        5: 3,
        6: 2,
        7: 3,
        8: 2,
        9: 2,
        10: 3,
        11: 1,
        12: 1,
        13: 2,
        14: 3,
        15: 2
    };
    
    // Disable all options for this question
    let options = document.querySelectorAll(`#question${questionNumber} .option`);
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Show explanation
    document.getElementById(`explanation${questionNumber}`).style.display = 'block';
    
    // Highlight correct and incorrect answers
    let correctOption = correctAnswers[questionNumber];
    options[correctOption - 1].classList.add('correct');
    
    if (selectedOption !== correctOption) {
        options[selectedOption - 1].classList.add('incorrect');
    } else {
        score++;
        document.getElementById('currentScore').textContent = score;
    }
    
    // Show next button
    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    // Hide current question
    document.getElementById(`question${currentQuestion}`).classList.remove('active');
    
    currentQuestion++;
    
    // Update progress bar
    let progress = (currentQuestion - 1) / totalQuestions * 100;
    document.getElementById('progress').style.width = `${progress}%`;
    document.getElementById('progress').textContent = `${Math.round(progress)}%`;
    
    if (currentQuestion <= totalQuestions) {
        // Show next question
        document.getElementById(`question${currentQuestion}`).classList.add('active');
        document.getElementById('nextBtn').style.display = 'none';
    } else {
        // Show final result
        document.getElementById('questionContainer').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        document.getElementById('score').textContent = score;
        document.getElementById('nextBtn').style.display = 'none';
        
        // Set final message
        let finalMessage = "";
        if (score === totalQuestions) {
            finalMessage = "¡Excelente! Tienes un conocimiento perfecto de economía básica.";
        } else if (score >= 12) {
            finalMessage = "¡Muy bien! Tienes un gran conocimiento de economía básica.";
        } else if (score >= 9) {
            finalMessage = "¡Buen trabajo! Tienes
// Animación de transición suave para las preguntas
document.querySelectorAll('.question').forEach(question => {
    question.style.transition = 'opacity 0.5s ease-in-out';
});

// Mejora en feedback visual
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        option.style.transform = 'scale(1.05)';
        setTimeout(() => {
            option.style.transform = 'scale(1)';
        }, 300);
    });
});
