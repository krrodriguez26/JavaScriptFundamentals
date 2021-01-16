// Elements selected
var  startButton = document.getElementById("start-btn");
var  nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var scoreDiv = document.getElementById("score");
let shuffledQuestions, currentQuestionIndex


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
      showQuestion(shuffledQuestions[currentQuestionIndex])
    }

    function showQuestion(question){
        console.log(question)
       questionElement.innerText = question.question

    }

    function selectAnswer() {
        var selectedButton = e.target
        var correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
   })
        nextButton.classList.remove("hide")
    }

// Counter render
     var count = 0;
     var questionTime = 10;
     var gaugeWidth = 150;
     var gaugeUnit = gaugeWidth / questionTime;
     var Timer;
     var score = 0;
    

      function renderCounter() {
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
       count = 0;
    }
}

   // Quiz questions
     var question = [
        
    {
        question:"Inside which HTML element do we put the JavaScript?",
             choices:["<js>", "<scripting>", "<script>", "<javascriptt>",],
             // answer should have matching string from choices
             answer:"<script>"
         },
             
             {
        question:"Where is the correct place to insert a JavaScript?",
        choices:["Both the <head> and the <body>", "The <body> section", "The <head> section","All of the above"],
           // answer should have matching string from choices
           answer:"Both the <head> and the <body>"      
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        choices:["onclick","onmouseover","onchange","onmouseclick",],
         // answer should have matching string from choices
        answer:"onclick"   
    },
    {
        question: "JavaScript is the same as Java?",
        choices:["True", "False"],
         // answer should have matching string from choices
        answer: "False"     
    },
    {
        question: 'How do you create a function in JavaScript?',
        choices:["function:myFunction()", "function = myFunction()","function myFunction()", "All of the above"],
         // answer should have matching string from choices
        answer: "function myFunction()"
              
    }
];

    
     

    
   
