//import elements
const startPageEl = document.querySelector('.start-quiz');
const questionPageEl = document.querySelector('#question-display');
const endPageEl = document.querySelector('#time-up');
const questionTitleEl = document.getElementById('question-title');
const questionBoxEl = document.getElementById('question-box');
//hide elements b/c at start
questionPageEl.style.display = "none";
endPageEl.style.display = "none";




const questionArr = [
    {
        title: "What does HTML stand for?",
        choices: {
            a: "Hyper Trainer Mark Language",
            b: "High Tech Motorized Language",
            c: "Hyper Text Markup Language",
            d: "Hyper Text Marku Languaeg"
        },
        correctAns: "c"
    },
    {
        title: "Classes can have only one onject.",
        choices: {
            a: "True",
            b: "False"
        },
        correctAns: "b"
    },
    {
        title: "What is, '5+5'",
        choices: [3, 7, 10, 4],
        answer: 2
    },
];
var currQuesIndex = 0
function choiceClickHandler() {
    //TODO: check answer correct 
    //TODO: go to next Q (increase index) and display next Q
    // display next question if it is not last question.  otherwise end page
}
function displayQuestion() {
    questionTitleEl.textContent = questionArr[currQuesIndex].title;
    //TODO: create buttons using document.createElement for each question choice
    var x = document.createElement("button")
    //NOTE: iterate choices using forloop
    //TODO: add click EventListener to button 
    //TODO: after creating button, append as child to question-box
}
document.getElementById("start-btn")
    .addEventListener("click", function () {
        console.log("start")
        var headerEl = document.getElementById("start-quiz-header");
        headerEl.style.display = "none";
        var questionDivEl = document.getElementById("question-display");
        questionDivEl.style.display = "block";

    })


