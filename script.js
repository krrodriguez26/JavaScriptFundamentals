var  startButton = document.getElementById('start-btn')
var  nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex 

function startQuiz() { 
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
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
} 

function selectAnswer(e){
    var selectedButton = e.target
    var correct =  selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button,dataset.correct)
    })


    function setStatusClass(element, correct) {
       clearStatusClass(element)
    }

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

var questions = [
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            { text: 'Both the <head> section and the <body> section are correct' , correct: true },
            { text: 'The <body> section ', correct: false },
            { text: 'The <head> section', correct: false }, 
            { text: 'All of the above', correct: false }
        ]
        
    }
]

var questions = [
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        answers: [
            { text: 'onclick' , correct: true },
            { text: 'onmouseover', correct: false },
            { text: 'onchange', correct: false }, 
            { text: 'onmouseclick', correct: false }
        ]
        
    }
]

var questions = [
    {
        question: 'The external JavaScript file must contain the <script> tag?',
        answers: [
            { text: 'True' , correct: false},
            { text: 'False', correct: true },
        ]
        
    }
]

var questions = [
    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            { text: 'function myFunction()' , correct: true},
            { text: 'function = myFunction()', correct: false},
            { text: 'function:myFunction()', correct: false},
        ]
        
    }
]