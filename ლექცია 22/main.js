let i = 0

do {
    console.log("Hello World")
    i++;
} while (i < 5)

// ------------------------------

const colors = ["red", "blue", "green"]

for (const color of colors) {
    console.log(color)
}

// -------------------------------

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(`i: ${i}", "j: ${j}`);
    }
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
matrix[0]

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}

// ------------------------------------

let numbers = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

document.getElementById("sumFor").textContent = `რიცხვების ჯამი არის: ${sum}`

let cars = ["Toyota", "Honda", "Ford"]

let carList = ""

for (const car of cars) {
    carList += car + "\n"
}

document.getElementById("output").textContent = carList

// ---------------------------------------