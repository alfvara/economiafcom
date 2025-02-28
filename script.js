// script.js para el juego de Economía y Finanzas
const preguntas = [
    {
        pregunta: "¿Qué estudia la macroeconomía en comparación con la microeconomía?",
        opciones: [
            "La economía en su conjunto, considerando agregados como el PIB y la inflación",
            "Las decisiones individuales de consumidores y empresas en mercados específicos",
            "Exclusivamente los mercados financieros internacionales",
            "Solamente la gestión de empresas a nivel interno"
        ],
        respuesta: 0,
        explicacion: "La macroeconomía analiza la economía de un país como un todo, sumando todas las ofertas y demandas, a diferencia de la microeconomía, que se enfoca en decisiones y mercados particulares."
    },
explicación: "El PIB es la medida del valor de mercado de todos los bienes y servicios finales producidos en el interior de un país durante un período (normalmente un año). Es un indicador clave del tamaño de la economía."
    },
    {
      pregunta: "¿Cuál de las siguientes actividades NO se incluye normalmente en el cálculo del PIB?",
      opciones: [
        "El trabajo doméstico no remunerado realizado dentro del hogar",
        "La producción manufacturera vendida en mercados formales",
        "La prestación de servicios profesionales declarados",
        "La inversión pública en infraestructura"
      ],
      respuesta: 0,
      explicación: "El PIB solo contabiliza bienes y servicios producidos y vendidos legalmente en mercados. Las tareas domésticas que no pasan por el mercado (autoconsumo) no se contabilizan. Por otro lado, la producción ilegal (economía sumergida) en España no se incluía antes de 2014, pero tras ese año se estima y añade según normativa europea."
    }, 
    {
        pregunta: "¿Cuál de los siguientes NO es un objetivo macroeconómico principal de un país?",
        opciones: [
            "Mantener una baja tasa de inflación",
            "Alcanzar un alto nivel de crecimiento económico",
            "Lograr un elevado nivel de desempleo",
            "Conseguir equilibrio en el comercio exterior"
        ],
        respuesta: 2,
        explicacion: "Un elevado desempleo no es un objetivo, sino algo que se busca evitar."
    },
    {
        pregunta: "¿Qué es el Producto Interior Bruto (PIB)?",
        opciones: [
            "El valor de mercado de todos los bienes y servicios finales producidos dentro de un país en un período",
            "El total de ingresos personales de todos los ciudadanos de un país durante un año",
            "El valor de todos los bienes producidos por los ciudadanos de un país sin importar dónde se encuentren",
            "La suma del valor de mercado de todos los bienes, incluyendo intermedios, producidos dentro de un país"
        ],
        respuesta: 0,
        explicacion: "El PIB es la medida del valor de mercado de todos los bienes y servicios finales producidos en el interior de un país durante un período."
    }
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
    showExplanation(questionObj.explicacion);
}

function showExplanation(explicacion) {
    const explanationElement = document.getElementById("explanation");
    explanationElement.innerText = explicacion;
    explanationElement.classList.add("show");
    setTimeout(nextQuestion, 3000);
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
