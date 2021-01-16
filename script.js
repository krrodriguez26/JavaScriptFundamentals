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
       
    }

    function selectAnswer() {
      var selectedButton = event.target.className
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
        question: 'Inside which HTML element do we put the JavaScript?',
             Answer: '<js>', correct: false, 
             Answer: '<scripting>', correct: false, 
             Answer: '<script>', correct: true,
             Answer: '<javascriptt>', correct: false, 
             
   
    },{
        question: 'Where is the correct place to insert a JavaScript?',
            Answer: 'Both the <head> section and the <body> section are correct', correct: true  , 
            Answer: 'The <body> section ', correct: false, 
            Answer: 'The <head> section',correct: false,  
            Answer:'All of the above',correct: false,  
           
    },{
        question: 'Which event occurs when the user clicks on an HTML element?',
            Answer:'onclick',correct: true  , 
            Answer: 'onmouseover',correct: false, 
            Answer:'onchange',correct: false,  
            Answer: 'onmouseclick',correct: false, 
           
    },{
        question: 'What is the correct way to write a JavaScript array?',
          Answer: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")' , correct: false, 
          Answer: 'var colors = ["red", "green", "blue"]  ', correct: true, 
          Answer: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false, 
          Answer: 'var colors = "red", "green", "blue"', correct: false, 
          
    },{
        question: 'How do you create a function in JavaScript?',
            Answer:'function myFunction()' , correct: true,  
            Answer: 'function = myFunction()', correct: false, 
            Answer:'function:myFunction()', correct: false, 
            Answer:'All of the above', correct: false, 
            
    }
];

    
     

    
   
