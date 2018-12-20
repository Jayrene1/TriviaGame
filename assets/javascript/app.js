// 1. Global variable declaration
var arrayOfQuestions = [];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 20;
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
arrayOfQuestions.push(new question("What is the best selling Christmas album in the U.S.?", ["Bing Crosby: White Christmas", "Elvis' Christmas Album", "Mariah Carey: Merry Christmas", "Kenny G: Miracles: The Holiday Album"], 1, "assets/images/recordx.jpg"));
arrayOfQuestions.push(new question("Which U.S. state streams the most Christmas music per capita?", ["Utah", "Florida", "Wisconsin", "White Christmas"], 0, "assets/images/mapx.jpg"));
arrayOfQuestions.push(new question("How many times did Bobby Helms re-record his hit, \"Jingle Bell Rock\"?", ["Once", "Six times", "Twelve times", "White Christmas"], 1, "assets/images/micx.jpg"));
arrayOfQuestions.push(new question("The a cappella vocalist group, Pentatonix, has the most youtube views (200M) on which of their Christmas covers?", ["White Christmas", "Angels We Have Heard On High", "Litte Drummer Boy", "Mary, Did You Know?"], 2, "assets/images/youtubex.jpg"));
arrayOfQuestions.push(new question("Which of these songs was actually written to celebrate Thanksgiving?", ["Jingle Bells", "White Christmas", "Let It Snow", "Up on the House Top"], 0, "assets/images/thanksgivingx.jpg"));
arrayOfQuestions.push(new question("The original composer of White Christmas, Irving Berlin, tried to pull this artist's cover from the radio because he hated it.", ["Bing Crosby", "Lady Gaga", "White Christmas", "Elvis Presley"], 3, "assets/images/sadtreex.jpg"));
arrayOfQuestions.push(new question("Originally composed in Latin, which of these Christmas songs is the oldest?", ["Joy to the World", "Silver Bells", "White Christmas", "O Come, O Come Emmanuel"], 3, "assets/images/churchx.jpg"));
arrayOfQuestions.push(new question("Which Christmas song was played the most on Spotify in 2017?", ["White Christmas - Bing Crosby", "Let It Snow! - Frank Sinatra", "Mistletoe - Justin Beiber", "All I Want for Christmas Is You - Mariah Carey"], 3, "assets/images/phonex.jpg"));
arrayOfQuestions.push(new question("\"Have Yourself a Merry Little Christmas\" was written for this movie featuring Judy Garland.", ["The Wizard of Oz", "Meet Me in St. Louis", "Miracle on 34th Street", "White Christmas"], 1 , "assets/images/treex.jpg"));
arrayOfQuestions.push(new question("Which Christmas song is a wrong answer to all previous questions?", ["White Christmas", "Blue Christmas", "No Christmas", "Baby, It's Cold Outside"], 0, "assets/images/bingcrosbyx.jpg"));

console.log(arrayOfQuestions);

// --------DOCUMENT READY---------
$(document).ready(function(){



// 3. Trivia Logic
function timer() {
    var intervalID = setInterval(function() {
        if (guessMade) {
            clearInterval(intervalID);
        } else if (time == -1) {
            clearInterval(intervalID);
            unanswered++;
            nextQuestion();
        } else {
        $("#time").text("Time Remaining: " + time + " seconds");
        time--;
        }
    }, 1000);
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
    
    "<div class='row p-4 text-center'><div class='col-md-12'><h3 id='time'></h3></div></div>"
    );
    time = 20; // reset time
    timer(); // begin clock
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
            correct++;
        } else {
            console.log("WRONG");
            $(this).css({"background-color":"#dc3545", "transition": "1s"});
            $(".question").html("<h3>You guessed wrong.</h3>");
            incorrect++;
        }
        guessMade = true;
        setTimeout(function(){nextQuestion()}, 3000);
    }
}
    // cycle through question or goes to game end
function nextQuestion() {
    currentIndex++; // sets index to the next question
    if(currentIndex < arrayOfQuestions.length) {
        loadQuestion(arrayOfQuestions[currentIndex]);
    } else {
        gameOver();
    }
    guessMade = false;
}



// 4. Click Events
$(document).on("click", "#start", function(){loadQuestion(arrayOfQuestions[currentIndex])}); // target document because direct selector will not be located once new dynamic content is generated by loadQuestion()
$(document).on("click", "#reset", function(){reset()}); // runs reset()
$(document).on("click", ".answer", checkAnswer); // run checkAnswer() when an answer is clicked

// 5. Game ending stats and reset
    // shows stats screen
function gameOver() {
    $("#game").html(
        "<img class='img-fluid rounded' src='assets/images/santax.jpg' alt='Game over image'>" + // game over image

        "<div class='row p-4 text-center'><div class='col-md-6 mx-auto'><h2>Game Over</h2><h4>Correct Answers: " + correct + "</h4><h4>Incorrect Answers: " + incorrect + "</h4><h4>Unanswered: " + unanswered + "</h4></div></div>" // game stats
    );
}

    // resets to start page
function reset() {
    TotalCorrectAnswers = 0;
    TotalIncorrectAnswers = 0;
    TotalUnanswered = 0;
    currentIndex = 0;
    guessMade = false;


    // reset html
    $("#game").html(
        "<img class='img-fluid rounded' src='assets/images/startx.jpg' alt='Image to accompany trivia question'>" + // start image

        "<div class='row p-4 text-center'><div class='col-md-6 mx-auto'><h2>Instructions</h2><p>Press Start to begin the trivia game. See how many questions you can get right. You only get a few seconds per question!</p></div></div>" + // instructions
            
        "<div class='row p-4 text-center'><div class='col-md-12'><button id='start' type='button' class='btn btn-info btn-lg'>Start Game</button></div></div>" // start button
    );
}



// 6. Images and sounds


}); //DOCUMENT READY close