let BigNum = 98

if (BigNum > 100) {
    console.log(true)
}else {
    console.log(false)
}

// ----------------------------------

let num = 30

if (num < 10 || num > 50) {
    console.log(true)
} else{
    console.log(false)
}

// ----------------------------------

let gender = "male"

if (gender === "male"){
    console.log("მამრობითი")
}else if (gender === "female") {
    console.log("მდედრობითი")
}else {
    console.log("გაურკვეველი სქესი")
}

// ----------------------------------

let animal = "elephant"

if (animal !== "elephant") {
    console.log("is not an elephant")
}else{
    console.log("is an elephant")
}

// ----------------------------------

let num1 = 99
let num2 = 19

if (num1 > num2) {
    console.log("num1 is greater than num2")
}else if (num1 < num2) {
    console.log("num1 is less than num2")   
}else{
    console.log("num1 is equal to num2")
}

// ----------------------------------

let month = 11

if (month === 1) {
    console.log("January")
}else if (month === 2) {
    console.log("February")
}else if (month === 3) {
    console.log("March")
}else if (month === 4) {
    console.log("April")
}else if (month === 5) {
    console.log("May")
}else if (month === 6) {
    console.log("June")
}else if (month === 7) {
    console.log("July")
}else if (month === 8) {
    console.log("August")
}else if (month === 9) {
    console.log("September")
}else if (month === 10) {
    console.log("October")
}else if (month === 11) {
    console.log("November")
}else if (month === 12) {
    console.log("December")
}else{
    console.log("Invalid month")
}

// ----------------------------------

let clock = 23; 
let dayPeriod = ''

if (clock >= 0 && clock < 12) { 
    dayPeriod = 'AM - დღე–ღამის პირველი პერიოდია'; 
} else {
    dayPeriod = 'PM - დღე–ღამის მეორე პერიოდია'; 
}

console.log(dayPeriod);

// ----------------------------------