/*const startQuizButton = document.querySelector("#start-quiz-button");
const introScreen = document.querySelector("#quiz-start-content");
const questionScreen = document.querySelector("#question-pages");
const navBar = document.querySelector("#top-bar-info");
const timerDisplay = navBar.querySelector("p"); // timer display element
const answerButtonContainer = questionScreen.querySelector("ul");*/



/*const finishScreen = document.querySelector("#finish-screen");
const main = document.querySelector("main");
const questionFeedback = document.querySelector("#question-feedback");
const scoreEntryContainer = document.querySelector("#score-entry");
const submitScoreButton = scoreEntryContainer.querySelector("button");
const initialsTextField = scoreEntryContainer.querySelector("input");
const highscoresScreen = document.querySelector("#highscores-screen");
const viewHighscoresButton = infoBar.querySelector("button");*/

const currentIndex = 0;
const choicesContainer = document.querySelector("#choices");
const startBtn = document.querySelector("#start");
const questionMessage = document.querySelector("#question");


////////////////////////////////////////////////////////////////
////////////// An array of questioned objects //////////////////
////-----------   5 Multiple Choice Questions    ----------/////
////////////////////////////////////////////////////////////////

const questions = [
  {
        question: "What is the most used name in the world?",
        choices: [ "Muhammad","Michael","James","Bob"],
        answer: Muhammad
    },

    {
        question: "Substances that have a definite size and shape, and vibrating particles that are close together are:",
        choices: ["Liquids","Gases","Solids","Ether"],
        answer: Solids
    },

    {
        question: "Where in the US is the “Petrified Forest?",
        choices: ["Arizona","Arkansas","California","Nevada"],
        answer: Arizona
    },

    {
        question: "Which style of art was produced in, or under the influence of, the Eastern Roman Empire?",
        choices: ["Levantine","Baroque","Byzantine","Constantinople"],
        answer: Byzantine
    },

     {
        question: "The jelly-like substance that makes up most of a cell is the?",
        choices: ["Nucleus","Chloroplast","Cytoplasm","Epidermis"],
        answer: Cytoplasm
     }
  ]

document.querySelector("#start").addEventListener("click", function(){
    displayQuestion()
})


//Then write a function called displayQuestion, which will put the first question’s text and choices into the html.  
//At the end of the js file, call the displayQuestion function and get the first question to show up. 
//After you have that, working, reach back out with another question.
//Add a questions variable





/*const score = 0
////for loop to grab each question ask the question and provide answers and respond wether the answer is correct///////
*/


function displayQuestion() {
    const currentQuestion = questions[i]
    document.querySelector("#question").textContent = currentQuestion.question

    const myChoices = currentQuestion.choices;

for (let i = 0; i < questions.length; i++) {
    const button = document.createElement("button")
    button.textContent = myChoices[i]
    button.addEventListener("click", function(){
    displayQuestion()    
 })
    document.querySelector("#choices").appendChild(button)

    }
}
/*
    const response = window.prompt(questions[i].prompt);
    if(response == questions [i].answer){
      score++;
      alert('Correct!');
   } else {
     alert('Wrong!');
    }
}

alert('you got ' + score + '/' + questions.length);  */

/*
//Step 1 initiate the game by clicking on button. add on click event listener.
Step 2 Create the init function. should clear(hidden) out the start page and bring up the first question.
//call display function to display the question and choices to allow user to click on answers.
Step 3 create an eval function if the correct button is clicked.... at the end of this displayQuestion with
step 4 create if statement if the answer is wrong deduct 10 seconds from the timer countdown.
step 5 create a function that brings up next question.
step 6 create a function to store and list high scores for each quiz taken.
step 7 button that goes "back" or "back to home".
*/






/*Getting the result display section
const result = document.getElementsByClassName("result");
result[0].innerText = ";"*/


