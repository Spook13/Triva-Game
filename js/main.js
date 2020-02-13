// Questions and answers array
let questions = [
    // question one
    { 
        question: "What was Ash's orginal name supposed to be?",
        answer: [
            { text: "Smoke", correct: true},
            { text: "Fortune", correct: false},
            { text: "Winner", correct: false},
            { text: "Assassin", correct: false},
        ]
    },

    // question 2
    { 
        question: "Which frame's visual design was influeenced by tree frogs?",
        answer: [
            { text: "Ember", correct: false},
            { text: "Ivara", correct: true},
            { text: "Trinity", correct: false},
            { text: "Saryn", correct: false},
        ] 
    },

    // queestion 3
    { 
        question: "Which frame was made by Alad V as part of thee Zanuka Project?",
        answer: [
            { text: "Rhino", correct: false},
            { text: "Nyx", correct: false},
            { text: "Valkyr", correct: true},
            { text: "Nova", correct: false},
        ]
    },

    // queestion 4
    { 
        question: "Which frames are considered a support frame?",
        answer: [
            { text: "Ember", correct: false},
            { text: "Saryn", correct: false},
            { text: "Mesa", correct: false},
            { text: "Trinity", correct: true},
        ]
    },

    // queestion 5
    { 
        question: "Which frame has the ability to summon a snow globe?",
        answer: [
            { text: "Frost", correct: true},
            { text: "Nyx", correct: false},
            { text: "Valkyr", correct: false},
            { text: "Nova", correct: false},
        ]
    },

    // queestion 6
    { 
        question: "Which frame can summon dead enemies that they have killed previously?",
        answer: [
            { text: "Gauss", correct: false},
            { text: "Nekros", correct: true},
            { text: "Excalibur", correct: false},
            { text: "Vauban", correct: false},
        ]
    },

    // queestion 7
    { 
        question: "Which of these frames are considered a stealth frame?",
        answer: [
            { text: "Umbra", correct: false},
            { text: "Rhino", correct: false},
            { text: "Loki", correct: true},
            { text: "Volt", correct: false},
        ]
    },

    // queestion 8
    { 
        question: "Which of these frames are considered a speed frames?",
        answer: [
            { text: "Trinity and Rhino", correct: false},
            { text: "Umbra and Nekros", correct: false},
            { text: "Saryn and Mag", correct: false},
            { text: "Gauss and Volt", correct: true},
        ]
    },

    // queestion 9
    { 
        question: "Which frame is the only frame that was originally human?",
        answer: [
            { text: "Umbra", correct: true},
            { text: "Valkry", correct: false},
            { text: "Banshee", correct: false},
            { text: "Vauban", correct: false},
        ]
    },

    // queestion 10
    { 
        question: "Which frames were orginally supposed to be the opposite gender?",
        answer: [
            { text: "Banshee and Excalibur", correct: false},
            { text: "Ash and Ember", correct: true},
            { text: "Frost and Ivara", correct: false},
            { text: "Loki and Mag", correct: false},
        ]
    }
];
// Other variables
let shuffleQuestions;
let currentQuestionsIndex;
let questionsContainerElement = document.getElementById("questionContainer");
let questionsElement = document.getElementById("questions");
let answerBtnsElement = document.getElementById("answerBtns");
let nextBtn = document.getElementById("nextBtn");

// Starts game
window.onload = startGame;

function startGame(){
    
    // Assign clicklistners
    // Next button
    nextBtn.addEventListener("click", nextQuestion);
    
    // Answer buttons 
    // Will trigger the checkAnswer function
    // Answer Button One
    answerBtns.children[0].addEventListener("click", function(){
        checkAnswer(0);
    });
    // Answer Button Two
    answerBtns.children[1].addEventListener("click", function(){
        checkAnswer(1);
    });
    // Answer Button Three
    answerBtns.children[2].addEventListener("click", function(){
        checkAnswer(2);
    });
    // Answer Button Four
    answerBtns.children[3].addEventListener("click", function(){
        checkAnswer(3);
    });    
    // Loads first question
    loadQuestion(0);
}
function loadQuestion(index){
    currentQuestionsIndex = index;
    
    // Grabs questions and answers from array
    // The "index" is the number of the question.
    var theQuestionToLoad = questions[index];
    
    // Edits HTML to output the Question text    
    questionsElement.innerText = theQuestionToLoad.question;
    
    // Giving buttons variables
    var answerButton1Text = theQuestionToLoad.answer[0].text;
    var answerButton2Text = theQuestionToLoad.answer[1].text;
    var answerButton3Text = theQuestionToLoad.answer[2].text;
    var answerButton4Text = theQuestionToLoad.answer[3].text;
    
    // Assiging buttons from HTML variables
    var answerBtn1 = answerBtnsElement.children[0]; //First <button> inside the answerBtns <div>
    var answerBtn2 = answerBtnsElement.children[1]; //Second <button>
    var answerBtn3 = answerBtnsElement.children[2]; //Third <button>
    var answerBtn4 = answerBtnsElement.children[3]; //Fourth <button>
    
    // Edit HTML to output the answer buttons text
    answerBtn1.innerText = answerButton1Text;
    answerBtn2.innerText = answerButton2Text;
    answerBtn3.innerText = answerButton3Text;
    answerBtn4.innerText = answerButton4Text;    
}
function checkAnswer(theButtonThatWasClicked){
    // Checks current question
    var currentQuestion = questions[currentQuestionsIndex];

    // Checks right answer
    var correctAnswer;    
    for(var i = 0; i < currentQuestion.answer.length; i++){
        if(currentQuestion.answer[i].correct == true){
            correctAnswer = i;
        }
    }
    
    // Checks answer user selected
    if(theButtonThatWasClicked == correctAnswer){
        // Highlights button green if correct
        answerBtnsElement.children[theButtonThatWasClicked].style.backgroundColor = "green";    
    }else{ 
        // Highlights button red if wrong
        answerBtnsElement.children[theButtonThatWasClicked].style.backgroundColor = "red";
        // And then highlights the right answer green
        answerBtnsElement.children[correctAnswer].style.backgroundColor = "green";
    }
}
// Next button function
function nextQuestion(){
    // The currect question
    var currentQuestion = currentQuestionsIndex;
    
    // Calling the next queestion
    var theNextQuestion = currentQuestion + 1;
    
    // Loads next question
    loadQuestion(theNextQuestion);
    // Changes buttons back to default color
    answerBtnsElement.children[0].style.backgroundColor = "#98b0c5";
    answerBtnsElement.children[1].style.backgroundColor = "#98b0c5";
    answerBtnsElement.children[2].style.backgroundColor = "#98b0c5";
    answerBtnsElement.children[3].style.backgroundColor = "#98b0c5";
}


