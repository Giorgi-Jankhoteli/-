let numbers = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

document.getElementById("task1").textContent = `რიცხვების ჯამი არის: ${sum}`

// -----------------

let fruits = ["Apple", "Banana", "Grape"]

let fruitList = ""

for (const fruit of fruits) {
    fruitList += fruit
}

document.getElementById("task2").textContent = fruitList

// -----------------

let name = ['Ana', "Beqa", "Mariami"]

i = 0

while (i < 4){
    console.log(name[i])
    i++
}

document.getElementById("task3").textContent = name

// -----------------

let I = 0

do{
    console.log(I)
    I++
} while (I < 10)

document.getElementById("task4").textContent = I

// -----------------

let num = [2, 4, 6, 8, 10];

document.write("<h2>Task 5</h2>");
for (let i = 0; i < num.length; i++) {
    let bigNum = num[i] * 2;
    document.write(bigNum + "<br>");
}

// -----------------

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

document.write("<h2>Task 6</h2>");
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
        console.log(arr[i])
        document.write(arr[i] + "<br>")
    }
}

// -----------------

let Numbers = [5, 10, 15, 20]
let Sum = 0

document.write("<h2>Task 8</h2>");
for(let i = 0; i < Numbers.length; i++) {
    Sum += Numbers[i]
    console.log(Sum)
}

document.write(Sum)

// -----------------

let word = ["a", "b", "c", "d", "e"]

document.write("<h2>Task 9</h2>");
for (let i = word.length - 1; i >= 0; i--) {
    console.log(word[i])
    document.write(word[i] + '<br>')
}

// -----------------

let Arra = []

document.write("<h2>Task 10</h2>");
for (let i = 1; i <= 5; i++){
    Arra.push(i)
    console.log(i)
    document.write(i + "<br>")
}

// -----------------

let fruit = [
    ["apple", "pear"],
    ["banana", "pineapple"]
]

document.write("<h2>Task 12</h2>")
fruit[0]

for (let i = 0; i < fruit.length; i++) {
    for (let j = 0; j < fruit[i].length; j++) {
        console.log(fruit[i][j]);
        document.write(fruit[i][j] + "<br>");
    }
}

// -----------------

let matrix = [
    [3, 5, 7], 
    [4, 6, 8]
]
let SUM = 0


document.write("<h2>Task 13</h2>")
for(let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
        SUM += matrix[i][j];
    }
}

console.log(SUM)
document.write(SUM);

// -----------------

let NUm = [42, 87, 15, 63, 29, 91, 8, 54, 77, 36]

document.write("<h2>Task 15</h2>")

let bigNum = NUm[0]

for (let i = 1; i < arr.length; i++) {
    if (NUm[i] > bigNum) {
        bigNum = NUm[i]
    }
}

console.log(bigNum)
document.write(bigNum)

// -----------------

let NUM = [1, 2, 3, 4, 5]

document.write("<h2>Task 16</h2>")

for (let i = 0; i < NUM.length; i++){
    NUM[i] = NUM[i] * 2;
    document.write(NUM[i] + "<br>")
}

console.log(NUM)

// -----------------

let words = ["sun", "echo", "mountain", "sky", "adventure", "cat", "harmony", "tree", "imagination", "ant"]


document.write("<h2>Task 18</h2>")

for(let i = 0; i < words.length; i++) {
    if (words[i].length > 4){
        console.log(words[i])
        document.write(words[i] + "<br>")
    }
}

// -----------------

let MATRIX = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
]
let even = []

document.write("<h2>Task 19</h2>")

for (let i = 0; i < MATRIX.length; i++){
    for (let j = 0; j < MATRIX[i].length; j++) {
        if (MATRIX[i][j] % 2 == 0) {
            even.push(MATRIX[i][j])
        }
    }
}

document.write(even);

// -----------------

let items = [42,"hello",true,null,undefined,3.14,"world",false,0,
"JavaScript",99,"Python",2025,"Angular",7,"array",15,"node",100,false];

let Items = []

document.write("<h2>Task 20</h2>")

for (let i = 0; i < items.length; i++) {
    if (typeof items[i] === "string") {
        Items.push(items[i])
    }
}

document.write(Items);