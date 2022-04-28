export class UI {
    constructor() { }

    showQuestion(text) {
        const questionTitle = document.getElementById("question")
        questionTitle.innerText = text;
    }
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = "";

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button");
            button.innerText = choices[i];
            button.className = "button"
            button.addEventListener("click", () => callback(choices[i]))

            choicesContainer.append(button);
        }
    }
    showScores(score) {
        const quizEndHTML = `
        <h1>Resultado</h1>
        <img src="../static/imagenes_quiz/win.png" style= "width:100%; alt="esto es el Logo">
        <h2>Felicidades lograste ${score} puntos</h2>     
        `
        const element = document.getElementById("quiz")
        element.innerHTML = quizEndHTML;
    }
    showProgress(currentIndex, total) {
        const element = document.getElementById("progress")
        element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
    }
}