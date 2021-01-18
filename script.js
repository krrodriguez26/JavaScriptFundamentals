// Elements selected
const startButton = document.getElementById("start-btn");
const  nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("score");
const submitButton = document.getElementById("submit-button");
const finalScore = document.getElementById("final-score");
const mostRecentScore = localStorage.getElementById("mostRecentScore");
let shuffledQuestions, currentQuestionIndex
finalScore.innerText = mostRecentScore


   // Quiz questions
     const question = [
        
    {
        question:"Inside which HTML element do we put the JavaScript?",
             answers: [
               { text: "<js>", correct: false},
               { text: "<scripting>", correct: false},
               { text: "<script>", correct: true},
               { text: "<javascript>", correct: false}
                ]
    },  
    {
        question:"Where is the correct place to insert a JavaScript?",
        answers: [
            { text: "Both the <head> and the <body>",correct: true},
            { text: "The <body> section", correct: false},
            { text: "The <head> section", correct: false},
            { text: "All of the above", correct: false}
        ]    
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        answers:[
            { text: "onclick", correct: true },
            { text: "onmouseover", correct: false},
            { text: "onchange", correct: false},
            { text: "onmouseclick",correct: false}  
        ]   
     },
    {
        question: "JavaScript is the same as Java?",
        answers:[
            {text: "True", correct: false},
            {text: "False", correct: true}    
        ]     
    },
    {
        question: 'How do you create a function in JavaScript?',
        answers:[

            {text: "function:myFunction()", correct: false},
            {text: "function = myFunction()", correct: false},
            {text: "function myFunction()", correct: true},
            {text: "All of the above", correct: false},  
        ]       
    }
];

var score= 0;
var questionIndex = 0;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

// Start quiz
   function startQuiz(){
    startButton.classList.add("hide")
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
    renderCounter()
    TIMER = setInterval(renderCounter,1000)
   }

 // Next question
    function setNextQuestion() {
      resetState()
      showQuestion(shuffledQuestions[currentQuestionIndex])
    }

    function showQuestion(question){
       questionElement.innerText = question.question
       question.answers.forEach(answer => {
           const button = document.createElement ("button")
           button.innerText = answer.text 
           button.classList.add("btn")
           if (answer.correct) {
               button.dataset.correct = answer.correct
           } 
           button.addEventListener("click", selectAnswer) 
           answerButtonsElement.appendChild(button)
       })
    } 
    
    function resetState(){
        nextButton.classList.add("hide")
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
   })
   if (shuffledQuestions.length > currentQuestionIndex + 1){
       nextButton.classList.remove("hide")
      } else {
          startButton.innerText = ("Submit")
          startButton.classList.remove("hide")
       }
   }
   
   function submitQuiz(){

   }

        
    function setStatusClass(element, correct){
       clearStatusClass(element)
       if (correct) {
           element.classList.add("correct") 
       } else {
          element.classList.add("wrong") 
       }
    }

    function clearStatusClass(element){
         element.classList.remove("correct")
         element.classList.remove("wrong")
    }

    // Counter render
     var count = 0;
     var questionTime = 10;
     var gaugeWidth = 150;
     var gaugeUnit = gaugeWidth / questionTime;
     var Timer;
     var score = 0;
    
      function renderCounter(){
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
       count = 0;
    }
}

// Render questions and answers
function render(questionIndex){
    for(let i=0; i< question.length; i++) {
        var question = question[questionIndex].question
        var answers = question[questionIndex].answers
    }
}

