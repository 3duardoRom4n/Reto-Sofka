//@ts-check
import { Question } from "./Question.js";
import { renderPage } from "../app.js";
import { UI } from "./UI.js";
export class Quiz {
  questionIndex = 0;
  score = 0;

  constructor(questions) {
    this.questions = questions;
  }
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  isEnded() {
    return this.questions.length === this.questionIndex;
  }
  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
      this.questionIndex++;
    } else {
      const stop = `
        <h1>Resultado : </h1>
        <img src="../static/imagenes_quiz/G-O.png" style= "width:100%; alt="esto es el Logo">
        <h2>Alcanzaste ${this.score} punto(s) </h2>              
        `;
      const element = document.getElementById("quiz");
      element.innerHTML = stop;
    }
  }
}
