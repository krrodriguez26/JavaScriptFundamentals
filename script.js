var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var shuffledQuestions, currentQuestionIndex 



function startQuiz() {
 console.log('Started')   
 startButton.classList.add('hide')
 shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide')
 startButton.addEventListener('click', startQuiz)
 setNextQuestion()
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    }

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
 var button = document.createElement('button')
 button.innerText = answer.text
 button.classList.add('btn')
 if (answer.correct) {
     button.dataset.correct = answer.correct
 }
 button.addEventListener('click', selectAnswer)
 answerButtonsElement.appendChild(button)
 })
}

function selectAnswer(){

}
 
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<js>', correct: false },
            { text: '<scripting>', correct: false },
            { text: '<script>', correct: true }, 
            { text: '<javascriptt>', correct: false }
        ]
    }
]