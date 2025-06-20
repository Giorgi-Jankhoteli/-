const scoreDisplay = document.getElementById("score");
const colorDisplay = document.getElementById("color");
const start = document.getElementById("start-button");
const startM = document.getElementById("start-button-m");
const startH = document.getElementById("start-button-h");
const boxes = document.querySelectorAll(".box");
const allBoxes = document.getElementById("boxes")
const resetBtn = document.getElementById("reset")

let Score = 0;
let currentAnswer = -1;
let colors = [];

function Reset(){
    colors = []
    boxes.forEach((box, i) => {
        box.style.backgroundColor = "white";
        box.classList.add("hover");
    });
}

function getRandomColors(count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        arr.push(`rgb(${r}, ${g}, ${b})`);
    }
    return arr;
}

boxes.forEach((box, i) => {
    box.addEventListener("click", () => {
        if (i === currentAnswer) {
            alert("Correct");
            Score += 10;
            startEasyGame();
        } else {
            alert("Wrong Answer");
            Score -= 5;
            if (Score < 0) Score = 0;
            scoreDisplay.textContent = Score;
        }
    });
}); 



start.addEventListener("click", startEasyGame);

function startEasyGame() {

    Reset()

    colors = getRandomColors(3);
    currentAnswer = Math.floor(Math.random() * 3);
    colorDisplay.textContent = colors[currentAnswer];
    scoreDisplay.textContent = Score;

    boxes.forEach((box, i) => {
        box.style.backgroundColor = colors[i];
        box.classList.add("hover");
    });

}



startM.addEventListener("click", startMediumGame);

function startMediumGame(){

    Reset()

    colors = getRandomColors(6);
    currentAnswer = Math.floor(Math.random() * 6);
    colorDisplay.textContent = colors[currentAnswer];
    scoreDisplay.textContent = Score;

    boxes.forEach((box, i) => {
        box.style.backgroundColor = colors[i];
        box.classList.add("hover");
    });
}



startH.addEventListener("click", startHardGame);

function startHardGame(){

    Reset()

    colors = getRandomColors(9);
    currentAnswer = Math.floor(Math.random() * 9);
    colorDisplay.textContent = colors[currentAnswer];
    scoreDisplay.textContent = Score;

    boxes.forEach((box, i) => {
        box.style.backgroundColor = colors[i];
        box.classList.add("hover");
    });
}