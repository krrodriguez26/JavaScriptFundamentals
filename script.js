var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startGame)

function startQuiz() {
 console.log('Started')
 startButton.classList.add('hide')
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer(){

}

var questions = [
    {
        question: ' ',
        answers: [
            { text: }
            { text:}
        ]
    }
]