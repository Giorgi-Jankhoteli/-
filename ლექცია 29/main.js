// const scoreDisplay = document.getElementById("score");
// const colorDisplay = document.getElementById("color");
// const start = document.getElementById("start-button");
// const boxes = document.querySelectorAll(".box");

// let Score = 0;
// let currentAnswer = -1;
// let colors = [];

// start.addEventListener("click", startEasyGame);

// function startEasyGame() {
//     colors = getRandomColors(3);
//     currentAnswer = Math.floor(Math.random() * 3);
//     colorDisplay.textContent = colors[currentAnswer];
//     scoreDisplay.textContent = Score;

//     boxes.forEach((box, i) => {
//         box.style.backgroundColor = colors[i];
//         box.classList.add("hover");
//     });
// }

// function getRandomColors(count) {
//     const arr = [];
//     for (let i = 0; i < count; i++) {
//         const r = Math.floor(Math.random() * 256);
//         const g = Math.floor(Math.random() * 256);
//         const b = Math.floor(Math.random() * 256);
//         arr.push(`rgb(${r}, ${g}, ${b})`);
//     }
//     return arr;
// }

// boxes.forEach((box, i) => {
//     box.addEventListener("click", () => {
//         if (i === currentAnswer) {
//             alert("Correct");
//             Score += 10;
//             startEasyGame();
//         } else {
//             alert("Wrong Answer");
//             Score -= 5;
//             if (Score < 0) Score = 0;
//         }
//         scoreDisplay.textContent = Score;
//     });
// });

// --------------------------------------------

const input = document.getElementById("myInput")
const output = document.getElementById("output")

input.addEventListener("keypress", function(){
    output.textContent = "Keypress event detected!"
})

output.addEventListener("keyup", function(){
    output.textContent = "Keyout event detected!"
})

// --------------------------------------------

const imageInput = document.getElementById("imageInput")
const imagePreview = document.getElementById("preview")

imageInput.addEventListener("change", function(){
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function(){
        preview.src = reader.result
    }

    if (file) reader.readAsDataURL(file);
})

// --------------------------------------------

const email = document.getElementById("email");
const result = document.getElementById("result");
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

email.addEventListener("keyup", function () {
    result.innerText = regex.test(email.value) ? "Email is correct" : "Email is incorrect";
});