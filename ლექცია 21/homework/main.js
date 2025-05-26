let list = []
let list2 = []

for (let i = 0; i < 30; i++) {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    list.push(randomNumber);
    if (randomNumber % 3 === 0) {
        list2.push(randomNumber);
    }
}

console.log(list);
console.log(list2);

// -------------------------------------------------

let list3 = []

for (let i = 0; i < 15; i++) {
    let RandomNumber = Math.floor(Math.random() * 31);
    if (!list3.includes(RandomNumber)) {
        list3.push(RandomNumber);
    }
}

console.log(list3);

// -------------------------------------------------

let arr = [12, 45, 26, 4, 8, 14, 16]
let smallest = arr[0];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }else if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(smallest);
console.log(largest);

// -------------------------------------------------

let arr2 = ["Hello", 1, true, "World", 2, false, "JavaScript", 3, "Programming"];

console.log(arr2.length);

// -------------------------------------------------

let ArrAy = ["a", "b", "c"]

ArrAy[3] = "d";
ArrAy[2] = "x";

console.log(ArrAy);

// -------------------------------------------------

let List = []

List.push("a", "b", "c");

console.log(List);

// -------------------------------------------------

let LIst = [1, 2, 3, 4, 5]
let key1 = 1
let key2 = 2

let Sum = LIst[key1] + LIst[key2];
console.log(Sum);

// -------------------------------------------------

let LISt = ["a", "b", "c", "d", "e"]

delete LISt[2];
delete LISt[4];

console.log(LISt);
console.log(LISt.length);

// -------------------------------------------------

let names = ["Giorgi", "Anna", "Dato", "Tazo", "Cotne"];

names.sort();
console.log(names);

// -------------------------------------------------

let numbers = [11, 22, 33, 44, 55];
console.log(numbers[4]);

// -------------------------------------------------

let numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.length)

// -------------------------------------------------

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers3.length)

// -------------------------------------------------

function getBlankArray(){
    let blankArray = [];
    for (let i = 0; i < 10; i++) {
        blankArray.push();
    }
    return blankArray;
}

console.log(getBlankArray());

// -------------------------------------------------

function getNumOfComponents() {
    let components = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return components.length;
}

console.log(getNumOfComponents());

// -------------------------------------------------

const priceSum = (price) => {
    let total = 0;
    for (let i = 0; i < price.length; i++) {
        total += price[i]
    }
    return total
}

const price = [10, 20, 30, 40, 50];
console.log(priceSum(price));

// -------------------------------------------------

function addBall() {
    let toys = ["hoverboard", "puzzle", "lego"];
    toys.push("ball");
    return toys;
}

console.log(addBall());

// -------------------------------------------------

function addToy(){
    let Toys = ["hoverboard", "puzzle", "lego"];
    let Toy = "Yo-Yo";
    Toys.push(Toy);
    return Toys;
}

console.log(addToy());

// -------------------------------------------------

function getLastToy() {
    let toys = ["hoverboard", "puzzle", "lego", "Yo-Yo"];
    return toys[3]
}

console.log(getLastToy());