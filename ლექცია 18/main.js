// let number = "5";

// console.log(Number(number))
// console.log(Number(true))
// console.log(Number(false))

// --------------------------------------

// && - and
// || - or
// ! - not

// console.log(true && false)
// console.log(true || false)
// console.log(!true)

// console.log(20 >= 15 && true)

// ---------------------------------------

let age = Number(prompt("Enter your age: "))

if(age > 18){
    console.log("Adult")
}else if(age <= 18 && age >= 13){
    console.log("Teenager")
}else{
    console.log("Child")
}

let Age = 20
let isAge = Age >= 18 ? "Adult" : "Child"

console.log(isAge)

// ---------------------------------------

let day = 2

switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid day")
}

// ---------------------------------------