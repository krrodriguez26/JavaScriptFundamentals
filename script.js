var  startButton = document.getElementById('start-btn')
var  nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() { 
 startButton.classList.add('hide')
 shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide')
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
 })
}
function resetState() {
    nextButton.classList.add('hide')
} 

function selectAnswer(e){
    var selectedButton = e.target
    var correct =  selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button,dataset.correct)
    })
    nextButton.classList.remove('hide')
}


    function setStatusClass(element, correct) {
       clearStatusClass(element)
       if (correct) {
           element.classList.add('correct')
       } else {
           element.classList.add('wrong')
       }
    }


function clearStatusClass(element, correct) {
    element.classList.add('correct')
    element.classList.add('wrong')
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
        question: 'What is the correct way to write a JavaScript array?',
        answers: [
            { text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")' , correct: false},
            { text: 'var colors = ["red", "green", "blue"]  ', correct: true },
            { text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false }, 
            { text: 'var colors = "red", "green", "blue"', correct: false }
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
            { text: 'All of the above', correct: false},
        ]
        
    }
]