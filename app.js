//@ts-check
import {questions} from "./data/questions.js"
import {Quiz} from "./models/Quiz.js";
import {UI} from "./models/UI.js";

/**
 * 
 * @param {Quiz} quiz el objeto quiz
 * @param {UI} ui objeto ui
 */

const renderPage = (quiz,ui) => {
    if (quiz.isEnded()) {        
        ui.showScores(quiz.score)
    }
    else{
        console.log(quiz)
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, 
    (currentChoice) => {quiz.guess(currentChoice);
    ui.showProgress(quiz.questionIndex +1, quiz.questions.length);
        renderPage(quiz,ui);}
        );        
     }
};

function main() {
    const quiz = new Quiz(questions);
    const ui = new UI();
    renderPage(quiz,ui)
}

main();