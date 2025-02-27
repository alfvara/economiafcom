// Preguntas y respuestas basadas en "Economía básica para comunicadores"
const questions = {
  basic: [
    {
      question: "¿Qué es la economía?",
      options: [
        "Una actividad humana para satisfacer necesidades utilizando recursos escasos eficientemente.",
        "La ciencia que se encarga exclusivamente de la producción industrial en fábricas.",
        "El estudio de cómo las empresas obtienen únicamente ganancias monetarias.",
        "La administración financiera de una empresa o gobierno."
      ],
      answer: 0,  // índice de la respuesta correcta
      explanation: "La economía se define como la actividad humana destinada a satisfacer necesidades ilimitadas utilizando recursos limitados de la manera más eficiente posible."
    },
    {
      question: "¿Cuál es el problema fundamental que estudia la economía?",
      options: [
        "La escasez de recursos frente a necesidades ilimitadas.",
        "La mala administración de las empresas públicas.",
        "El elevado costo de vida en las ciudades.",
        "La falta de tecnología en los procesos productivos."
      ],
      answer: 0,
      explanation: "El problema básico de la economía es la escasez: los recursos son limitados mientras que las necesidades humanas son ilimitadas. Esto obliga a decidir cómo asignar los recursos de forma eficiente."
    },
    {
      question: "¿Cuál de estas es una de las tres preguntas fundamentales de la economía?",
      options: [
        "¿Qué bienes se deben producir?",
        "¿Cómo reducir los precios al mínimo?",
        "¿Cuándo deben fabricarse los productos?",
        "¿Cuánto dinero imprimir cada año?"
      ],
      answer: 0,
      explanation: "La economía busca responder tres preguntas básicas: qué bienes producir (y en qué cantidad), cómo producirlos (qué recursos y métodos utilizar) y para quién producirlos (cómo distribuirlos)."
    }
  ],
  intermediate: [
    {
      question: "¿Qué es el \"coste de oportunidad\" en economía?",
      options: [
        "El valor de la mejor alternativa a la que se renuncia al tomar una decisión.",
        "El costo adicional de producir una unidad extra de un bien o servicio.",
        "El dinero que se paga por obtener un recurso natural escaso.",
        "El precio que fija el mercado para un bien cuando hay escasez."
      ],
      answer: 0,
      explanation: "El coste de oportunidad es el valor de la alternativa a la que renunciamos al elegir una opción. En otras palabras, es aquello a lo que debes renunciar cuando tomas una decisión económica."
    },
    {
      question: "Si el precio de mercado de un producto está por debajo de su precio de equilibrio, ¿qué ocurre?",
      options: [
        "Se produce un exceso de demanda, es decir, escasez del producto.",
        "Se produce un excedente de oferta del producto.",
        "El mercado entra en una situación de equilibrio estable automáticamente.",
        "Los productores aumentan inmediatamente la oferta por iniciativa propia."
      ],
      answer: 0,
      explanation: "Cuando el precio está por debajo del equilibrio, la cantidad demandada supera a la ofrecida, generando escasez (exceso de demanda). Muchos compradores quieren el bien al precio bajo, pero pocos vendedores están dispuestos a vender, ejerciendo presión para que el precio suba hacia el equilibrio."
    },
    {
      question: "¿Cuál de los siguientes es un factor de producción clásico?",
      options: [
        "La tierra.",
        "El dinero.",
        "La energía.",
        "La tecnología."
      ],
      answer: 0,
      explanation: "En economía, los factores de producción son los recursos básicos para producir bienes y servicios. Tradicionalmente se consideran tres: tierra (recursos naturales), trabajo (esfuerzo humano) y capital (herramientas, maquinaria, instalaciones)."
    }
  ],
  advanced: [
    {
      question: "¿Qué es la \"ventaja comparativa\" en el contexto económico?",
      options: [
        "La capacidad de producir un bien a un menor coste de oportunidad que otro productor.",
        "La habilidad de producir una cantidad mayor de un bien que cualquier otro competidor.",
        "Tener costos totales de producción más bajos que los de otro país en todos los bienes.",
        "Una situación en la que dos productos diferentes tienen exactamente el mismo precio de mercado."
      ],
      answer: 0,
      explanation: "La ventaja comparativa es la capacidad de una persona, empresa o país para producir un bien con un coste de oportunidad más bajo que el de otro. Esto sustenta la especialización e intercambio: cada agente se especializa en lo que produce más eficientemente en comparación con otros."
    },
    {
      question: "¿Cuál de los siguientes es un ejemplo de un bien público?",
      options: [
        "La defensa nacional.",
        "Un teléfono móvil personal.",
        "La comida servida en un restaurante.",
        "Un automóvil particular."
      ],
      answer: 0,
      explanation: "Un bien público es aquel que no es excluible ni rival en el consumo. La defensa nacional es un ejemplo típico de bien público: protege a todos por igual y el uso por una persona no disminuye la disponibilidad para otras. En cambio, bienes como teléfonos, comida o automóviles son bienes privados."
    },
    {
      question: "¿Qué mide el Producto Interno Bruto (PIB) de un país?",
      options: [
        "El valor total de los bienes y servicios finales producidos dentro del país en un periodo (generalmente un año).",
        "El ingreso promedio mensual de los habitantes del país.",
        "El total de dinero en circulación (oferta monetaria) en la economía nacional.",
        "El nivel general de precios de los bienes y servicios en la economía."
      ],
      answer: 0,
      explanation: "El PIB mide el valor monetario total de los bienes y servicios finales producidos en las fronteras de un país durante un período determinado. Es un indicador del tamaño y actividad de la economía nacional."
    }
  ]
};

// Variables de estado del juego
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let questionStartTime = 0;  // para medir el tiempo de respuesta

// Referencias a elementos del DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const difficultySelect = document.getElementById("difficulty");
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const explanationElement = document.getElementById("explanation");
const submitButton = document.getElementById("submit-btn");
const nextButton = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");
const feedbackText = document.getElementById("feedback-text");
const restartButton = document.getElementById("restart-btn");

// Iniciar el quiz con el nivel seleccionado
startButton.addEventListener("click", startQuiz);

// Al hacer clic en "Responder"
submitButton.addEventListener("click", checkAnswer);

// Al hacer clic en "Siguiente"
nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion(currentIndex);
  } else {
    endQuiz();
  }
});

// Reiniciar el quiz (volver a la pantalla de inicio)
restartButton.addEventListener("click", () => {
  // Reiniciar variables de estado
  currentIndex = 0;
  score = 0;
  correctCount = 0;
  // Ocultar pantallas de quiz y resultados, mostrar inicio
  quizScreen.style.display = "none";
  resultScreen.style.display = "none";
  startScreen.style.display = "block";
});

// Función para iniciar el quiz con la dificultad seleccionada
function startQuiz() {
  const difficulty = difficultySelect.value;  // obtener nivel seleccionado ("basic", "intermediate" o "advanced")
  currentQuestions = questions[difficulty];
  currentIndex = 0;
  score = 0;
  correctCount = 0;
  // Mostrar la pantalla del quiz y ocultar la de inicio
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  // Cargar la primera pregunta
  showQuestion(currentIndex);
}

// Función para mostrar una pregunta en pantalla dado su índice
function showQuestion(index) {
  const q = currentQuestions[index];
  questionElement.textContent = "Pregunta " + (index + 1) + ": " + q.question;
  // Generar las opciones de respuesta
  let optionsHTML = "";
  q.options.forEach((optionText, i) => {
    optionsHTML += `
      <label>
        <input type="radio" name="option" value="${i}" />
        ${optionText}
      </label>`;
  });
  optionsElement.innerHTML = optionsHTML;
  // Resetear elementos de control y explicación
  explanationElement.style.display = "none";
  explanationElement.innerHTML = "";
  submitButton.disabled = false;
  submitButton.style.display = "inline-block";
  nextButton.style.display = "none";
  // Marcar tiempo de inicio para esta pregunta
  questionStartTime = Date.now();
}

// Función para verificar la respuesta seleccionada cuando el usuario hace clic en "Responder"
function checkAnswer() {
  // Obtener la opción seleccionada
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Por favor, selecciona una respuesta antes de continuar.");
    return;
  }
  const selectedValue = parseInt(selectedOption.value);
  const currentQuestion = currentQuestions[currentIndex];
  // Calcular tiempo de respuesta en segundos
  const timeTaken = (Date.now() - questionStartTime) / 1000;
  // Verificar si la respuesta es correcta
  const isCorrect = (selectedValue === currentQuestion.answer);
  // Deshabilitar el botón de responder para evitar múltiples clics
  submitButton.disabled = true;
  // Actualizar puntaje y conteo de correctas
  if (isCorrect) {
    correctCount++;
    // Puntaje base por acierto
    let points = 100;
    // Bonus de tiempo: más puntos si respondió rápido (tramos de tiempo)
    let bonus = 0;
    if (timeTaken <= 5) {
      bonus = 50;    // muy rápido
    } else if (timeTaken <= 10) {
      bonus = 30;    // rápido
    } else if (timeTaken <= 20) {
      bonus = 10;    // moderado
    } else {
      bonus = 0;     // más lento, sin bonus
    }
    points += bonus;
    score += points;
  } else {
    // Si es incorrecta, se podría penalizar o dejar en 0. Aquí simplemente 0 puntos.
  }
  // Mostrar explicación y retroalimentación de la respuesta
  showExplanation(isCorrect, currentQuestion.explanation);
}

// Función para mostrar la explicación de la pregunta actual y resaltar respuestas
function showExplanation(isCorrect, explanationText) {
  // Resaltar la respuesta correcta en la lista de opciones
  const correctIndex = currentQuestions[currentIndex].answer;
  const correctOptionInput = document.querySelector(`input[name="option"][value="${correctIndex}"]`);
  if (correctOptionInput) {
    // Marcar la opción correcta visualmente
    correctOptionInput.parentElement.classList.add("correct-answer");
  }
  // Si la respuesta seleccionada es incorrecta, marcar esa opción en rojo
  const selectedInput = document.querySelector('input[name="option"]:checked');
  if (selectedInput && parseInt(selectedInput.value) !== correctIndex) {
    selectedInput.parentElement.classList.add("wrong-answer");
  }
  // Deshabilitar todas las opciones después de responder
  document.querySelectorAll('input[name="option"]').forEach(opt => opt.disabled = true);
  // Construir mensaje de retroalimentación
  let resultMsg = "";
  if (isCorrect) {
    resultMsg = "<span class='correct'>¡Correcto!</span> ";
  } else {
    resultMsg = "<span class='incorrect'>Respuesta incorrecta.</span> ";
  }
  // Mostrar la explicación proporcionada para esta pregunta
  explanationElement.innerHTML = resultMsg + explanationText;
  explanationElement.style.display = "block";
  // Mostrar botón "Siguiente" para avanzar a la siguiente pregunta o finalizar
  submitButton.style.display = "none";
  nextButton.style.display = "inline-block";
}

// Función para finalizar el quiz y mostrar resultados finales
function endQuiz() {
  // Ocultar la sección de preguntas
  quizScreen.style.display = "none";
  // Calcular alguna métrica adicional si se desea (por ejemplo, porcentaje de aciertos)
  const totalQuestions = currentQuestions.length;
  // Mostrar puntuación total y número de aciertos
  scoreText.textContent = "Tu puntuación final es " + score + " puntos. Respuestas correctas: " + correctCount + " de " + totalQuestions + ".";
  // Generar un mensaje de retroalimentación según el desempeño
  let feedback = "";
  const percentage = (correctCount / totalQuestions) * 100;
  if (percentage === 100) {
    feedback = "¡Excelente! Has respondido correctamente a todas las preguntas. Tienes un dominio total del tema.";
  } else if (percentage >= 80) {
    feedback = "¡Muy bien! Tienes sólidos conocimientos de este nivel de dificultad.";
  } else if (percentage >= 50) {
    feedback = "Buen trabajo. Aunque acertaste varias preguntas, podrías repasar algunos conceptos para mejorar.";
  } else {
    feedback = "Has tenido algunas dificultades. Te recomendamos repasar el material y volver a intentarlo para afianzar conocimientos.";
  }
  feedbackText.textContent = feedback;
  // Mostrar la pantalla de resultados
  resultScreen.style.display = "block";
}
