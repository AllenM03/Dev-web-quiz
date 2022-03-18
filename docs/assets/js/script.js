//Start with an array of questions. Make them look like this:
//var questions = [
  //{
    //question: "What is your most used name in the world?",
    //choices: { a: "Muhammad", b: "Michael", c: "James", d: "Bob" },
   // answer: "a",
 // },
  ////...
//]



//Then write a function called displayQuestion, which will put the first question’s text and choices into the html.  
//At the end of the js file, call the displayQuestion function and get the first question to show up. 
//After you have that, working, reach back out with another question.
//Add a questions variable

/*const btn = document.querySelector('#button');
btn.onclick = () => {
    alert('you clicked me Yayy');
}
*/

////////////////////////////////////////////////////////////////
////////////// An array of questioned objects ////////////////
////-----------   5 Multiple Questions    ----------/////////////
////////////////////////////////////////////////////////////////

const questions = [
    {
        id: 0,
        prompt: "How can JavaScript display data?",
        choices: { 
            a: "Writing into an HTML element, using innerHTML.",
            b: "Writing into an alert box, using window.alert'()'.",
            c: "Writing into the browser console, using console.log'()'.",
            d: "all of the above.",
        },
        answer: "d",
    },

    {
        prompt: "How can JavaScript display data?",
        choices: { 
            a: "Writing into an HTML element, using innerHTML.",
            b: "Writing into an alert box, using window.alert'()'.",
            c: "Writing into the browser console, using console.log'()'.",
            d: "all of the above.",
        },
        answer: "b",
    },

    {
        prompt: "How can JavaScript display data?",
        choices: { 
            a: "Writing into an HTML element, using innerHTML.",
            b: "Writing into an alert box, using window.alert'()'.",
            c: "Writing into the browser console, using console.log'()'.",
            d: "all of the above.",
        },
        answer: "d",
    },

    {
        prompt: "How can JavaScript display data?",
        choices: { 
            a: "Writing into an HTML element, using innerHTML.",
            b: "Writing into an alert box, using window.alert'()'.",
            c: "Writing into the browser console, using console.log'()'.",
            d: "all of the above.",
        },
        answer: "d",
    },

    {
        prompt: "How can JavaScript display data?",
        choices: { 
            a: "Writing into an HTML element, using innerHTML.",
            b: "Writing into an alert box, using window.alert'()'.",
            c: "Writing into the browser console, using console.log'()'.",
            d: "all of the above.",
        },
        answer: "d",
    },
]

/*const score = 0
////for loop to grab each question ask the question and provide answers and respond wether the answer is correct///////

for (const i = 0; i < questions.length; i++){
    const response = window.prompt(questions[i].prompt);
    if(response == questions [i].answer){
      score++;
      alert('Correct!');
   } else {
     alert('Wrong!');
    }
}
alert('you got ' + score + '/' + questions.length);  */

//Step 1 initiate the game by clicking on button. add on click event listener.

//Step 2 Create the init function. should clear(hidden) out the start page and bring up the first question.
// call display function to display the question and choices to allow user to click on answers.
//Step 3 create an eval function if the correct button is clicked.... at the end of this displayQuestion with
//step 4 create if statement if the answer is wrong deduct 10 seconds from the timer countdown.
//step 5 create a function that brings up next question.
//step 6 create a function to store and list high scores for each quiz taken.
//step 7 button that goes "back" or "back to home".







/*Getting the result display section
const result = document.getElementsByClassName("result");
result[0].innerText = ";"*/


