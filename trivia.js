//Logic for multiple choice. We use query selector to select portions of DOM. Program listens for clicks and checks if right or wrong answer
// Added a class for all the wrong answers and added ID for right answer
// Added id for p tag that will display message if right or wrong answer

// Funtion for multiple choice display
document.addEventListener("DOMContentLoaded", function () {
  // grabbing correct answer id
  let correctChoice = document.querySelector("#correctAnswer");
  // grabbing the p tag where result will display
  let result = document.querySelector("#returnResult");
  // CORRECT ANSWER LOGIC
  // listening for clicks in correct answer
  correctChoice.addEventListener("click", function () {
    // change background of correct answer box to green if clicked
    correctChoice.style.backgroundColor = "green";
    // and display in p tag congrats message
    result.innerHTML = "Congrats! You got the correct answer!";
  });
  // INCORRECT ANSWER LOGIC
  // grabbing all the buttons with class wrongAnswer
  let wrongChoice = document.querySelectorAll(".wrongAnswer");
  // we need to loop to monitor if one of buttons in wrongAnswer is clicked
  for (let i = 0; i < wrongChoice.length; i++) {
    // listening for clicks in wrongChoice
    wrongChoice[i].addEventListener("click", function () {
      // if click made, turn background color of "this wrongChoice" to red
      this.style.backgroundColor = "red";
      // and in p tag display wrong answer message
      result.innerHTML = "Wrong answer! Better luck next time!";
    });
  }
});

// Logic for free response. We use query selector to listen for click on submit button and grab the value of the input to check if response corrent or wrong
// we use the id in p tag and query selector to edit innerHTML
document.addEventListener("DOMContentLoaded", function () {
  // query selectors for submit button, input and p tag
  let responseButton = document.querySelector("#responseButton");
  let responseInput = document.querySelector("#responseInput");
  let freeQuestionResult = document.querySelector("#freeQuestionResult");

  // CORRECT ANSWER LOGIC
  // function listens for click in responseButton
  responseButton.addEventListener("click", function () {
    // we convert value of input to lowercase and compare with "switzerland"
    if (responseInput.value.toLowerCase() === "switzerland") {
      // if correct, we display right answer in p tag and change input background color to green
      freeQuestionResult.innerHTML = "Right answer!";
      responseInput.style.backgroundColor = "green";
    }
    // INCORRECT ANSWER LOGIC
    else {
      // else we display wrong answer in p tag and change input background color to red
      freeQuestionResult.innerHTML = "Wrong! Good luck next time.";
      responseInput.style.backgroundColor = "red";
    }
  });
});
