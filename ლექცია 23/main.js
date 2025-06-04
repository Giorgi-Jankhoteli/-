function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));

// ------------------------------

function greetUser() {
    const userName = "Alice";
    console.log(`Hello, ${userName}!`);
}

console.log(greetUser());

// ------------------------------

function showDate() {
    console.log("Today's date is: " + new Date().toLocaleDateString());
}

// ------------------------------

function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isAdult(20)); 
console.log(isAdult(16));

// ------------------------------

function circleArea(radius) {
    return Math.PI * radius * radius;
}

// ------------------------------

function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumNumbers(6)); 

// ------------------------------

function doubleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    return arr;
}

console.log(doubleArray([1, 2, 3, 4]));

// ------------------------------

function printEvenNumbers(m) {
    for (let i = 0; i <= m; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

console.log(printEvenNumbers(10));

// ------------------------------

function findMax(Arr) {
    let max = Arr[0];
    for (let i = 1; i < Arr.length; i++) {
        if (Arr[i] > max) {
            max = Arr[i];
        }
    }
    return max;
}

console.log(findMax([3, 5, 7, 2, 8]));

// ------------------------------

function combineWords(Words) {
    return Words.join(" ");
}

console.log(combineWords(["Hello", "World", "!"]));