let num1 = 7.45;
let num2 = "13.56";
num2 = parseFloat(num2);

function roundUp() {
    let result = 0;
    result += Math.ceil(num1 * num2);
    return result;
}

console.log(roundUp());
document.write(roundUp());

// -------------------------------------

let Num1 = 20.3;
let Num2 = 27.2;
let Result = 0;

function sum() {
    Result = (Num1 + Num2).toFixed(3);
    return Result;
}

console.log(sum());

// -------------------------------------

let num = 77;
let square = Math.sqrt(num);

function Square() {
    square = square.toFixed(2);
    return square;
}

console.log(Square());

// -------------------------------------

let Num = 3.55;
let REsult = 0;

function cube() {
    Num = Num ** 3
    REsult = Num.toFixed(3);
    return REsult;
}

console.log(cube());

// -------------------------------------

function info(string) {
    alert(string);
}

console.log(info("Hello, world!"));

// -------------------------------------

function exponentiation(a, b) {
    a ** b;
    alert(a ** b);
}

console.log(exponentiation(5, 3));

// -------------------------------------

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(22));
console.log(isEven(23));

// -------------------------------------

function address(addr) {
    const myAddress = prompt("Please enter your address:", addr);
    
    if (myAddress !== null) {
        const myAddressElement = document.getElementById("my-address");
        myAddressElement.innerHTML = myAddress;
    }
}

address("Tbilisi, Georgia");

// -------------------------------------

function RoundUp(a, b, c) {
    return [
        a.toFixed(1),
        b.toFixed(0),
        c.toFixed(2)
    ]
}

console.log(RoundUp(3.14159, 2.71828, 1.41421));

// -------------------------------------

function filteredString(str) {
    if (str.includes("HTML")) {
        return str.replace("HTML", "");
    }
    return str;
}

console.log(filteredString("HTML is a markup language"));

// -------------------------------------

const squared = (num) => {return num ** 2;}
console.log(squared(5));