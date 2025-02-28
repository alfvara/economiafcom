// script.js para el juego de Economía y Finanzas
// Aquí debes incluir las preguntas en el formato adecuado
const preguntas = [
    {
        pregunta: "¿Cuánto es 2 + 2?",
        opciones: ["3", "4", "5", "22"],
        respuesta: 1
    }
    // ... Añade más preguntas aquí
];

let currentRound = 1;
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
const timeLimit = 15; // 15 segundos por pregunta

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    currentRound = 1;
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionObj = preguntas[currentQuestionIndex];
    document.getElementById("questionText").innerText = questionObj.pregunta;
    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";
    questionObj.opciones.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "optionBtn";
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
    startTimer();
}

function startTimer() {
    let timeLeft = timeLimit;
    document.getElementById("time").innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(selectedIndex) {
    clearInterval(timerInterval);
    const questionObj = preguntas[currentQuestionIndex];
    if (selectedIndex === questionObj.respuesta) {
        score += 10;
    }
    document.getElementById("score").innerText = score;
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < preguntas.length) {
        loadQuestion();
    } else {
        finishGame();
    }
}

function finishGame() {
    document.getElementById("finalScore").innerText = score;
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("finalResult").style.display = "block";
}

document.getElementById("startBtn").addEventListener("click", startGame);
