// 1. Global variable declaration
var arrayOfQuestions = [];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 10;
var currentIndex = 0;
var guessMade = false;


// 2. Object declaration
function question(text, answers, correctAnswers, imageURL){
    this.text = text;
    this.answers = answers;
    this.correctAnswer = correctAnswers;
    this.imageURL = imageURL;
}
    //pushing question data
arrayOfQuestions.push(new question("first question", ["Oh", "Yes", "Ok", "No"], 0, "https://picsum.photos/1175/400?image=1074"));
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

    "<div class='row p-4 text-center'><div class='col-md-8 py-2 mx-auto bg-info border rounded text-light animated slideInLeft question'><h3>" + question.text + "</h3></div></div>" + //question text

    "<div class='row text-center my-4'><div class='col-md-5 p-3 ml-auto mr-2 border border-info rounded hover-background animated fadeIn answer' data-correct='" + question.correctAnswer + "'><h4 >" + question.answers[0] + "</h4></div>" + //answer 1

    "<div class='col-md-5 p-3 mr-auto ml-2 border border-info rounded hover-background animated fadeIn answer' data-correct='" + question.correctAnswer + "'><h4>" + question.answers[1] + "</h4></div></div>" + //answer 2

    "<div class='row text-center my-4'><div class='col-md-5 p-3 ml-auto mr-2 border border-info rounded hover-background animated fadeIn answer' data-correct='" + question.correctAnswer + "'><h4>" + question.answers[2] + "</h4></div>" + //answer 3

    "<div class='col-md-5 p-3 mr-auto ml-2 border border-info rounded hover-background animated fadeIn answer' data-correct='" + question.correctAnswer + "'><h4>" + question.answers[3] + "</h4></div></div>" + //answer 4
    
    "<div class='row p-4 text-center'><div class='col-md-12'><h3>Time Remaining: 10 seconds</h3></div></div>"
    );
}

    // check user answer
function checkAnswer() {
    if (guessMade == false) {
        var answer = $(this).attr("data-correct");
        var guess = $(this).text();
        console.log("index of correct answer: " + answer);
        console.log("text of this guess is: " + guess);
        console.log("the right answer is: " + arrayOfQuestions[currentIndex].answers[answer]);
        if(arrayOfQuestions[currentIndex].answers[answer] == guess){
            console.log("YOU CHOSE CORRECTLY");
            $(this).css({"background-color":"#28a745", "transition": "1s"});
            $(".question").html("<h3>You guessed correctly!</h3>");
            guessMade = true;
            correct++;
        } else {
            console.log("WRONG");
            $(this).css({"background-color":"#dc3545", "transition": "1s"});
            $(".question").html("<h3>You guessed wrong.</h3>");
            guessMade = true;
            incorrect++;
        }
        setTimeout(function(){nextQuestion()}, 5000);
    }
}
    // cycle through question
function nextQuestion() {
    currentIndex++; // sets index to the next question
    loadQuestion(arrayOfQuestions[currentIndex]);
}


// 4. Click Events
$(document).on("click", "#start", function(){loadQuestion(arrayOfQuestions[currentIndex])}); // target document because direct selector will not be located once new dynamic content is generated by loadQuestion()
$(document).on("click", "#reset", function(){reset()}); // runs reset()
$(document).on("click", ".answer", checkAnswer); // run checkAnswer() when an answer is clicked

// 5. Game ending stats and reset
function reset() {
    TotalCorrectAnswers = 0;
    TotalIncorrectAnswers = 0;
    TotalUnanswered = 0;
    currentIndex = 0;

    // reset html
    $("#game").html(
        "<img class='img-fluid rounded' src='https://picsum.photos/1175/300?image=1062' alt='Image to accompany trivia question'>" + // start image

        "<div class='row p-4 text-center'><div class='col-md-6 mx-auto'><h2>Instructions</h2><p>Press Start to begin the trivia game. See how many questions you can get right. You only get a few seconds per question!</p></div></div>" + // instructions
            
        "<div class='row p-4 text-center'><div class='col-md-12'><button id='start' type='button' class='btn btn-info btn-lg'>Start Game</button></div></div>" // start button
    );
}

    // new game function

// 6. Images and sounds


}); //DOCUMENT READY close