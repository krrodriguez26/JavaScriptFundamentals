// Elements selected
var  startButton = document.getElementById("start-btn");
var  nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var scoreDiv = document.getElementById("score");


startButton.addEventListener("click", startQuiz);

// Start quiz
   function startQuiz(){
    startButton.style.display = "none";
    renderQuestion(); 
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
   }

  //Render question
function renderQuestion() {
    var q = question [runningQuestion];
    question.innerHTML ="<p>"+ q.question + "</p>"; 
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
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

     // For loops to loop through all info in array
     for (var i = 0; i < question.length; i++) {
    
    }

    // Check answer
    function checkAnswer (answer) {
        if (answer == question[runningQuestion].correct){
            //Answer is correct
            score++;
        }else{
            //answer is wrong
        }
    }
   
