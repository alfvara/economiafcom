// Lista de preguntas (ejemplo simple; reemplazar con el conjunto real de preguntas)
const questions = [
    {
        pregunta: "¿Cuánto es 2 + 2?",
        opciones: ["3", "4", "5", "22"],
        respuesta: 1 // Índice de la respuesta correcta (en este caso, "4")
    }
    // ... (más preguntas)
];

let currentRound = 1;
let roundsPlayed = 1;
let round1Questions = [];
let round2Questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let answered = false;  // Indicador para evitar respuestas múltiples o doble conteo

// Función para mezclar aleatoriamente un array (algoritmo de Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Iniciar el juego: seleccionar preguntas para la ronda 1 (y 2), reiniciar puntuación y mostrar la primera pregunta
function startGame() {
    // Mezclar el conjunto total de preguntas
    const shuffled = shuffle([...questions]);
    // Seleccionar 20 preguntas para la primera ronda
    round1Questions = shuffled.slice(0, 20);
    // Seleccionar otras 20 para la segunda ronda (si hay suficientes preguntas restantes)
    if (shuffled.length > 20) {
        round2Questions = shuffled.slice(20, 40);
    } else {
        round2Questions = [];
    }
    currentRound = 1;
    roundsPlayed = 1;
    currentQuestionIndex = 0;
    score = 0;
    // Mostrar puntuación inicial (0)
    document.getElementById("score").innerText = score;
    // Ocultar la pantalla de inicio y mostrar el contenedor del juego
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
    showQuestion();
}

// Mostrar la pregunta actual y sus opciones en la interfaz
function showQuestion() {
    let questionObj;
    if (currentRound === 1) {
        questionObj = round1Questions[currentQuestionIndex];
    } else {
        questionObj = round2Questions[currentQuestionIndex];
    }
    // Mostrar el texto de la pregunta
    document.getElementById("questionText").innerText = questionObj.pregunta;
    // Mostrar las opciones de respuesta
    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = ""; // limpiar opciones previas
    questionObj.opciones.forEach((opcion, idx) => {
        const btn = document.createElement("button");
        btn.innerText = opcion;
        btn.className = "optionBtn";
        // Asignar evento al hacer clic en una opción
        btn.addEventListener("click", () => selectAnswer(idx));
        optionsContainer.appendChild(btn);
    });
    answered = false;
    // Iniciar temporizador de 15 segundos para esta pregunta
    startTimer(15);
}

// Iniciar el temporizador para la pregunta actual
function startTimer(seconds) {
    let timeLeft = seconds;
    // Mostrar tiempo inicial
    document.getElementById("time").innerText = timeLeft;
    // Limpiar cualquier temporizador previo
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    // Iniciar intervalo que actualiza el tiempo cada segundo
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        if (timeLeft <= 0) {
            // Tiempo agotado: detener temporizador y procesar como respuesta incorrecta por tiempo
            clearInterval(timerInterval);
            timesUp();
        }
    }, 1000);
}

// Manejar la selección de una respuesta por parte del jugador
function selectAnswer(selectedIndex) {
    if (answered) return;
    answered = true;
    // Detener el temporizador
    clearInterval(timerInterval);
    // Obtener la pregunta actual y la respuesta correcta
    const questionObj = currentRound === 1 ? round1Questions[currentQuestionIndex] : round2Questions[currentQuestionIndex];
    const correctIndex = questionObj.respuesta;
    // Deshabilitar todas las opciones para evitar múltiples selecciones
    const optionButtons = document.querySelectorAll("#optionsContainer button");
    optionButtons.forEach(btn => btn.disabled = true);
    // Verificar la respuesta elegida
    if (selectedIndex === correctIndex) {
        // Respuesta correcta
        score++;
        document.getElementById("score").innerText = score;
        optionButtons[selectedIndex].classList.add("correct");
    } else {
        // Respuesta incorrecta
        optionButtons[selectedIndex].classList.add("incorrect");
        // Marcar también la opción correcta para feedback
        optionButtons[correctIndex].classList.add("correct");
    }
    // Pasar a la siguiente pregunta tras una breve pausa
    setTimeout(nextQuestion, 1000);
}

// Manejar el caso en que se agota el tiempo de la pregunta
function timesUp() {
    if (answered) return;
    answered = true;
    // Deshabilitar opciones (tiempo expirado, no se respondió)
    const optionButtons = document.querySelectorAll("#optionsContainer button");
    optionButtons.forEach(btn => btn.disabled = true);
    // Marcar la respuesta correcta (la pregunta se considera incorrecta por no responder a tiempo)
    const questionObj = currentRound === 1 ? round1Questions[currentQuestionIndex] : round2Questions[currentQuestionIndex];
    const correctIndex = questionObj.respuesta;
    optionButtons[correctIndex].classList.add("correct");
    // Continuar a la siguiente pregunta tras una breve pausa
    setTimeout(nextQuestion, 1000);
}

// Avanzar a la siguiente pregunta o manejar el fin de la ronda/juego
function nextQuestion() {
    currentQuestionIndex++;
    // Si hemos llegado al final de la ronda actual:
    if (currentRound === 1 && currentQuestionIndex >= round1Questions.length) {
        // Termina la primera ronda
        if (round2Questions.length > 0) {
            // Si existe una segunda ronda, ofrecer la opción de continuar
            document.getElementById("gameContainer").style.display = "none";
            document.getElementById("roundComplete").style.display = "block";
            // Mostrar la puntuación acumulada tras la primera ronda
            document.getElementById("scoreSoFar").innerText = score;
        } else {
            // Si no hay suficientes preguntas para una segunda ronda, finalizar el juego
            finishGame();
        }
    } else if (currentRound === 2 && currentQuestionIndex >= round2Questions.length) {
        // Termina la segunda ronda
        finishGame();
    } else {
        // Quedan preguntas en la ronda actual, mostrar la siguiente pregunta
        showQuestion();
    }
}

// Finalizar el juego y mostrar los resultados finales
function finishGame() {
    // Ocultar contenedor de juego y pantalla de fin de ronda (si estuviera visible)
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("roundComplete").style.display = "none";
    // Mostrar la pantalla de resultado final
    document.getElementById("finalResult").style.display = "block";
    // Mostrar puntuación final
    document.getElementById("finalScore").innerText = score;
    // Evaluar desempeño según la puntuación obtenida
    let totalQuestionsAnswered = roundsPlayed === 2 ? (round1Questions.length + round2Questions.length) : round1Questions.length;
    let percentage = (score / totalQuestionsAnswered) * 100;
    let performanceLevel;
    if (percentage >= 80) {
        performanceLevel = "Avanzado";
    } else if (percentage >= 50) {
        performanceLevel = "Básico";
    } else {
        performanceLevel = "Amplio margen de mejora";
    }
    // Mostrar nivel de desempeño
    const perfSpan = document.getElementById("performanceLevel");
    perfSpan.innerText = performanceLevel;
    // Asignar clase para estilos según el nivel de desempeño
    perfSpan.className = "";
    if (performanceLevel === "Avanzado") {
        perfSpan.classList.add("perf-advanced");
    } else if (performanceLevel === "Básico") {
        perfSpan.classList.add("perf-basic");
    } else {
        perfSpan.classList.add("perf-improve");
    }
}

// Event Listeners para los botones de la interfaz
document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("continueBtn").addEventListener("click", () => {
    // Comenzar la segunda ronda
    document.getElementById("roundComplete").style.display = "none";
    currentRound = 2;
    roundsPlayed = 2;
    currentQuestionIndex = 0;
    document.getElementById("gameContainer").style.display = "block";
    showQuestion();
});
document.getElementById("finishBtn").addEventListener("click", () => {
    // Finalizar el juego después de la primera ronda
    finishGame();
});
document.getElementById("restartBtn").addEventListener("click", () => {
    // Reiniciar el juego (recargar la página para empezar de nuevo)
    location.reload();
});
