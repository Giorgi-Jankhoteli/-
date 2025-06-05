let int1 = 70
let int2 = 27
let result = 0

function sum() {
    let summ = int1 / int2
    result = summ
}

sum()

console.log(result.toFixed(3))

// --------------------------------------

function ferenheitToCelsius() {
    let fahrenheit = prompt("შეიყვანეთ ფარენჰეიტის ციფრი")
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius.toFixed(2)
}

console.log(ferenheitToCelsius())

// --------------------------------------

function include(str1, str2) {
    if (str1.includes(str2)) {
        return true
    } else {
        return false
    }

}

let RESULT = include("Hello world", "world")
alert(RESULT)
// --------------------------------------

function mathPow(base, exponent) {
    return base ** exponent
}

console.log(mathPow(2, 3)) 

// --------------------------------

const multiplication = (x, y) => x * y;