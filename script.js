// Elements selected
var  startButton = document.getElementById("start-btn");
var  nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-choices");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var scoreDiv = document.getElementById("score");

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
 
 // Quiz questions
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
             choiceA: '<js>', 
             choiceB: '<scripting>', 
             choiceC: '<script>', 
             choiceD: '<javascriptt>', 
             correct: "C" 
   
    },{
        question: 'Where is the correct place to insert a JavaScript?',
            choiceA: 'Both the <head> section and the <body> section are correct' , 
            choiceB: 'The <body> section ', 
            choiceC: 'The <head> section',  
            choiceD:'All of the above',  
            correct: "A"  
    },{
        question: 'Which event occurs when the user clicks on an HTML element?',
           choiceA:'onclick' , 
           choiceB: 'onmouseover', 
           choiceC:'onchange',  
           choiceD: 'onmouseclick', 
           correct: "A"
    },{
        question: 'What is the correct way to write a JavaScript array?',
          choiceA: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")' , 
          choiceB: 'var colors = ["red", "green", "blue"]  ', 
          choiceC: 'var colors = (1:"red", 2:"green", 3:"blue")', 
          choiceD: 'var colors = "red", "green", "blue"', 
          correct: "B" 
    },{
        question: 'How do you create a function in JavaScript?',
           choiceA:'function myFunction()' , 
           choiceB: 'function = myFunction()', 
           choiceC:'function:myFunction()', 
           choiceD:'All of the above', 
           correct: "A"  
    }
];