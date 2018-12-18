// 1. Global variable declaration
var arrayOfQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 10;


// 2. Object declaration
function question(text, answers, correctAnswers){
    this.text = text;
    this.answers = answers;
    this.correctAnswer = correctAnswers;
}

var question1 = new question("first question", ["0", "1", "2", "3"], 0);
var question2 = new question("second question", ["0", "1", "2", "3"], 1);
var question3 = new question("third question", ["0", "1", "2", "3"], 2);
var question4 = new question("fourth question", ["0", "1", "2", "3"], 3);
var question5 = new question("fifth question", ["0", "1", "2", "3"], 0);
var question6 = new question("sixth question", ["0", "1", "2", "3"], 1);
var question7 = new question("seventh question", ["0", "1", "2", "3"], 2);
var question8 = new question("eighth question", ["0", "1", "2", "3"], 3);
var question9 = new question("ninth question", ["0", "1", "2", "3"], 0);
var question10 = new question("tenth question", ["0", "1", "2", "3"], 1);



// 3. Trivia Logic
function timer() {
    setInterval(function(){time--;}, 1000)
    if(time == 0) {
        clearTimeout(time);
        unanswered++;
        // TODO move to next question
    }
}

    // on start, run first question
        // display question text and answers

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