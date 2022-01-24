// make each question and its answers an object and then insert them into an array
/*
var q1 = {
    question: blah blah,
    a: aaaaa,
    b: bbbbb,
    c: ccccc,
    d: ddddd,
    correct: a,
};
*/

// LOOK AT SOLUTIONS FROM IN CLASS EXAMPLES FOR HELP ON TIMERS
// Start by buildign basic structre of the page
// Event listenr on start quiz button to trigger quiz loop

// Quiz Loop
// Quiz logic housed in a loop which cycles when an answer is submitted.
// score variable tracks the users score
// loop exits when timer runs out or all questions have been answered. Compare the count varaible to the .length of the array to see if all have been answered?
// user answer gets stored in a variable and comapred to q1.correct
// if wrong subtract time from timer; else increment score

// dialog box to store users score is laucnhed on game loop completion.
// create separate html page to display users score

/*
1) Build basic html and css for both pages - DONE
2) Add the array of question objects, and the objects - Done
3) Add loop to test iterating through array - DONE PRINTS QUESTIONS CORRECTLY
4) Add buttons to display answers DONE BUTTONS ADDED AS LI'S of QUESTIONS
5) Modifty Quiz loop with timer
6) Add timer logic for wrong answers
7)  Add local storage for high scores


*/

var startEl = document.querySelector("#start-quiz");
var question = document.querySelector(".container"); // select the parent so we can look for presses on the children
var introEl = document.querySelector("#intro");
var quizEl = document.querySelector("#question");
var timerEl = document.querySelector("#countdown");
var scoreEl = document.querySelector("#final-score");
var scoreFormEl = document.querySelector("#score-form")

var currentQuestion = 0; // currently selected question int the questiosn array
var timeLeft = 60; // initialize the timer as global so it can be accessed anywhere

// initialize questions array
// for checking could cmp strings or the the letter of the answer to the letter of the correct answer
var questions = [
    {
        question: "The condition in an iff / else statement is enclosed with ________.",
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correct: "3",
    },
    {
        question: "A very useful tool used during development and debuggin for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correct: "4",
    },
    {
        question: "Arrays in javaScript can be used to store ______.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "4",
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "3",
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "3",
    }
]

// create ul container
var createQuestionEl = function () {
    // create content div to house the questios and answers
    var contentEl = document.createElement("div");
    contentEl.className = "content";

    var questionEl = document.createElement("h3");
    questionEl.className = "question";
    questionEl.innerHTML = questions[currentQuestion].question;

    // append the h3 question as a child of the content div
    contentEl.appendChild(questionEl);

    var answerListEl = document.createElement("ul");
    answerListEl.className = "answer-list";

    // iterate through object creating child buttons as li's of the answerListEl ul
    for (var i = 0; i < 4; i++) {
        var answerEl = document.createElement("li");
        answerEl.id = i + 1;
        answerEl.innerHTML = "<button class='btn' type='submit'>" + questions[currentQuestion].answers[i] + "</button>";
        answerListEl.appendChild(answerEl);
    };

    // append completed answer list to the contentEl div
    contentEl.appendChild(answerListEl);

    quizEl.appendChild(contentEl);

    console.log(contentEl);

    // maybe add id of correct to correct answer and use that to check?
};

function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {

            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            // when 'timeLeft it becomes second
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            // once time is up tell user
            timerEl.textContent = 'Times Up!';

            clearInterval(timeInterval);

            endQuiz(); // call end quiz if timer reaches zero
        }
    }, 1000);
}

var quizHandler = function () {
    event.preventDefault(); // prevent default reload of page
    // hide the intro blurb and start quiz button
    introEl.style.display = "none";
    countdown(); // start countdown


    // initialize time logic before the for loop

    // for loop goes in a callback function
    /*for (var i = 0; i < questions.length; i++) {

        // REMOVES FIRST CHILD OF THE QUIZ ELEMENT
       // quizEl.removeChild(quizEl.childNodes[0]);
    }*/

    // build event listener loop to go throughh questions
    while (currentQuestion < questions.length ) {
        createQuestionEl(); // call createQuestionEl with the question object at index i
        currentQuestion++;

        quizEl.addEventListener("submit", function() {

        });

    }

    // once all questions are answered through call end quiz
    endQuiz();
}

var endQuiz = function () {

    scoreEl.textContent = "Your final score is: " + timeLeft;
    scoreFormEl.style.display = "block";

};



// on click run quizHandler function
startEl.addEventListener("click", quizHandler);


// when question is answer remove it with removeChild on the parent.
// add fade out effect to question leaving
// have the score submission form in the html on load and use the hidden class.  Then unhide when questions are done.

// stop time function - EndGame function