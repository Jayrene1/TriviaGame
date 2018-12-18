// 1. Global variable declaration
var arrayOfQuestions = [];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 10;
var currentIndex = 0;



// 2. Object declaration
function question(text, answers, correctAnswers, imageURL){
    this.text = text;
    this.answers = answers;
    this.correctAnswer = correctAnswers;
    this.imageURL = imageURL;
}
    //pushing question data
arrayOfQuestions.push(new question("first question", ["0", "1", "2", "3"], 0, "https://picsum.photos/1175/400?image=1074"));
arrayOfQuestions.push(new question("second question", ["0", "1", "2", "3"], 1, "https://picsum.photos/1175/400?image=1070"));
arrayOfQuestions.push(new question("third question", ["0", "1", "2", "3"], 2, "https://picsum.photos/1175/400?image=1067"));
arrayOfQuestions.push(new question("fourth question", ["0", "1", "2", "3"], 3, "https://picsum.photos/1175/400?image=1040"));
arrayOfQuestions.push(new question("fifth question", ["0", "1", "2", "3"], 0, "https://picsum.photos/1175/400?image=1020"));
arrayOfQuestions.push(new question("sixth question", ["0", "1", "2", "3"], 1, "https://picsum.photos/1175/400?image=1003"));
arrayOfQuestions.push(new question("seventh question", ["0", "1", "2", "3"], 2, "https://picsum.photos/1175/400?image=1005"));
arrayOfQuestions.push(new question("eighth question", ["0", "1", "2", "3"], 3, "https://picsum.photos/1175/400?image=944"));
arrayOfQuestions.push(new question("ninth question", ["0", "1", "2", "3"], 0 , "https://picsum.photos/1175/400?image=882"));
arrayOfQuestions.push(new question("tenth question", ["0", "1", "2", "3"], 1, "https://picsum.photos/1175/400?image=858"));

console.log(arrayOfQuestions);

// --------DOCUMENT READY---------
$(document).ready(function(){



// 3. Trivia Logic
function timer() {
    setInterval(function(){time--;}, 1000);
    if(time == 0) {
        clearTimeout(time);
        unanswered++;
        // TODO move to next question
    }
}

    // on start, run first question


    // display question text and answers
function loadQuestion(question) {
    $("#game").html(
    "<div class='progress'><div class='progress-bar bg-info' role='progressbar' style='width: " + (currentIndex + 1) + "0%' aria-valuenow='" + (currentIndex + 1) + "0' aria-valuemin='0' aria-valuemax='100'>" + (currentIndex + 1) + " out of 10</div></div>" + //progress bar

    "<img class='img-fluid rounded' src=" + question.imageURL + " alt='Image to accompany trivia question'>" + //image

    "<div class='row p-4 text-center'><div class='col-md-8 py-2 mx-auto bg-info border rounded text-light animated slideInLeft'><h3>" + question.text + "</h3></div></div>" + //question text

    "<div class='row text-center my-4'><div class='col-md-5 p-3 ml-auto mr-2 border border-info rounded hover-background animated fadeIn'><h4 >" + question.answers[0] + "</h4></div>" + //answer 1

    "<div class='col-md-5 p-3 mr-auto ml-2 border border-info rounded hover-background animated fadeIn'><h4>" + question.answers[1] + "</h4></div></div>" + //answer 2

    "<div class='row text-center my-4'><div class='col-md-5 p-3 ml-auto mr-2 border border-info rounded hover-background animated fadeIn'><h4>" + question.answers[2] + "</h4></div>" + //answer 3

    "<div class='col-md-5 p-3 mr-auto ml-2 border border-info rounded hover-background animated fadeIn'><h4>" + question.answers[3] + "</h4></div></div>" + //answer 4
    
    "<div class='row p-4 text-center'><div class='col-md-12'><h3>Time Remaining: 10 seconds</h3></div></div>"
    );
}

    // check user answer

    // cycle through question



// 4. Game ending stats and reset
function reset() {
    TotalCorrectAnswers = 0;
    TotalIncorrectAnswers = 0;
    TotalUnanswered = 0;

    // reset html
}

    // new game function

// 5. Images and sounds


}); //DOCUMENT READY close