// Fonction pour afficher les questions du quiz
function showQuestion(question) {
    document.getElementById("question").innerHTML = question.question;
    var answerContainer = document.getElementById("answers");
    answerContainer.innerHTML = "";
    question.answers.forEach(function(answer) {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.onclick = function() {
            checkAnswer(answer.correct);
        };
        answerContainer.appendChild(button);
    });
}

// Fonction pour vérifier la réponse choisie
function checkAnswer(correct) {
    if (correct) {
        alert("Bonne réponse !");
        correctAnswers++;
    } else {
        alert("Mauvaise réponse !");
    }
    nextQuestion();
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showScore();
    }
}

// Fonction pour afficher le score
function showScore() {
    var score = correctAnswers + "/" + questions.length;
    var message = "";
    if (correctAnswers === questions.length) {
        message = "Félicitations ! Vous avez obtenu un score parfait !";
    } else if (correctAnswers >= 3) {
        message = "Bravo ! Vous avez réussi le quiz avec succès.";
    } else {
        message = "Dommage ! Vous pouvez essayer à nouveau pour améliorer votre score.";
    }
    document.getElementById("result-message").innerHTML = "Votre score : " + score + "<br>" + message;
    document.getElementById("score-modal").style.display = "block";
}

// Fonction pour démarrer le quiz
document.getElementById("start-quiz").onclick = function() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("start-quiz").style.display = "none";
    document.querySelector('body').classList.add('dark-mode'); // Ajouter classe pour mode sombre
    showQuestion(questions[currentQuestionIndex]);
}

// Fonction pour fermer le modal du score et recommencer le quiz
document.getElementById("close-button").onclick = function() {
    document.getElementById("score-modal").style.display = "none";
    resetQuiz();
}

document.getElementById("restart-button").onclick = function() {
    document.getElementById("score-modal").style.display = "none";
    resetQuiz();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("start-quiz").style.display = "block";
    document.querySelector('body').classList.remove('dark-mode'); // Enlever classe pour mode sombre
}

// Initialisation du quiz
var currentQuestionIndex = 0;
var correctAnswers = 0;

// Questions du quiz
var questions = [
    {
        question: "Quelle est la vitesse maximale du Concorde ?",
        answers: [
            { text: "Mach 1.5", correct: false },
            { text: "Mach 2.0", correct: true },
            { text: "Mach 2.5", correct: false },
            { text: "Mach 3.0", correct: false }
        ]
    },
    {
        question: "Quand le Concorde a-t-il effectué son premier vol ?",
        answers: [
            { text: "1950", correct: false },
            { text: "1969", correct: true },
            { text: "1976", correct: false },
            { text: "1985", correct: false }
        ]
    },
    {
        question: "Combien de passagers le Concorde pouvait-il transporter en moyenne ?",
        answers: [
            { text: "50", correct: false },
            { text: "100", correct: true },
            { text: "150", correct: false },
            { text: "200", correct: false }
        ]
    },
    {
        question: "En quelle année le Concorde a-t-il été retiré du service ?",
        answers: [
            { text: "1999", correct: false },
            { text: "2001", correct: false },
            { text: "2003", correct: true },
            { text: "2005", correct: false }
        ]
    },
    {
        question: "Quel est le constructeur du Concorde ?",
        answers: [
            { text: "Airbus", correct: false },
            { text: "Boeing", correct: false },
            { text: "Aerospatiale/BAC", correct: true },
            { text: "Lockheed Martin", correct: false }
        ]
    }
];
