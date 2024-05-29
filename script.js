document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz');
    const correctAnswers = {
        1: 'A',
        2: 'D',
        // Adicione as respostas corretas para as demais perguntas aqui
    };

    const questions = [
        {
            id: 1,
            question: "Qual é a capital da França?",
            answers: {
                A: "Paris",
                B: "Londres",
                C: "Roma",
                D: "Berlim"
            }
        },
        {
            id: 2,
            question: "Qual é a capital da Alemanha?",
            answers: {
                A: "Paris",
                B: "Londres",
                C: "Roma",
                D: "Berlim"
            }
        }
        // Adicione mais perguntas aqui
    ];

    let currentQuestion = 1;

    function renderQuestion(question) {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        if (question.id !== currentQuestion) {
            questionDiv.classList.add('hidden');
        }

        const questionTitle = document.createElement('h2');
        questionTitle.textContent = `Pergunta ${question.id}`;
        questionDiv.appendChild(questionTitle);

        const questionText = document.createElement('p');
        questionText.textContent = question.question;
        questionDiv.appendChild(questionText);

        Object.keys(question.answers).forEach(key => {
            const button = document.createElement('button');
            button.textContent = question.answers[key];
            button.onclick = () => checkAnswer(question.id, key);
            questionDiv.appendChild(button);
        });

        quizContainer.appendChild(questionDiv);
    }

    function showPage(pageId) {
        document.querySelectorAll('.question').forEach(question => {
            question.classList.add('hidden');
        });
        document.getElementById(`question${pageId}`).classList.remove('hidden');
    }

    function checkAnswer(questionNumber, answer) {
        if (answer === correctAnswers[questionNumber]) {
            document.getElementById(`piece${questionNumber}`).classList.remove('hidden');
            currentQuestion++;
            if (currentQuestion <= Object.keys(correctAnswers).length) {
                showPage(currentQuestion);
            } else {
                alert('Parabéns, você completou o quiz!');
            }
        } else {
            alert('Resposta incorreta, tente novamente.');
        }
    }

    questions.forEach(question => renderQuestion(question));
});
