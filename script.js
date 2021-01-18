// Elements selected
const startButton = document.getElementById("start-btn");
const  nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("score");
let shuffledQuestions, currentQuestionIndex


   // Quiz questions
     const question = [
        
    {
        question:"Inside which HTML element do we put the JavaScript?",
             answers:["<js>", "<scripting>", "<script>", "<javascriptt>",],
             // answer should have matching string from choices
             correct:"<script>"
    },  
    {
        question:"Where is the correct place to insert a JavaScript?",
        answers:["Both the <head> and the <body>", "The <body> section", "The <head> section","All of the above"],
           // answer should have matching string from choices
           correct:"Both the <head> and the <body>"      
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        answers:["onclick","onmouseover","onchange","onmouseclick",],
         // answer should have matching string from choices
         correct:"onclick"   
     },
    {
        question: "JavaScript is the same as Java?",
        answers:["True", "False"],
         // answer should have matching string from choices
         correct: "False"     
    },
    {
        question: 'How do you create a function in JavaScript?',
        answers:["function:myFunction()", "function = myFunction()","function myFunction()", "All of the above"],
         // answer should have matching string from choices
        correct: "function myFunction()"   
           
    }
];


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
      showQuestion(shuffledQuestions[currentQuestionIndex])
    }

    function showQuestion(question){
       questionElement.innerText = question.question
       question.answers.forEach(answer => {
           const button = document.createElement ("button")
           button.innerText = answer.text 
           button.classList.add("btn")
           if (answer.correct) {
               button.daraset.correct = answer.correct
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
        nextButton.classList.remove("hide")
    }

    function setStatusClass(element, correct){
       clearStatusClass(element)
       if (correct) {
           element.classList.add("correct")
       }else{
          element.classList.add("wrong") 
       }
    }

    function clearStatusClass(element){
         element.classList.remove("correct")
         element.classList.remove("wrong")
    }
    
    // Render questions and answers
    function render(questionIndex){
    for(let i=0; i< question.length; i++) {
        var question = question[questionIndex].question
        var answers = question[questionIndex].answers
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