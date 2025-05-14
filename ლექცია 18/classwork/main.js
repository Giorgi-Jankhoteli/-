let input = Number(prompt("Enter Your Number Here:"))

if (isNaN(input)){
    console.log("The Number is " + input)
}else{
    console.log("Invalid Number")
}

// ---------------------------------------------------

let number = prompt("Enter Number between 0 and 100:")
let Isnumber = number - 10 > 50 && number - 10 < 80 ? "Yes" : "No"
console.log(Isnumber)

// ---------------------------------------------------

num = prompt("Enter Number:")

if (num >=10 && num <= 50){
    console.log("Is between 10 and 50")
}else{
    console.log("Is not between 10 and 50")
}

if (num % 5 == 0){
    console.log("არის 5-ის გამყოფი")
}else{
    console.log("არ არის 5-ის გამყოფი")
}

// ---------------------------------------------------

let Num = prompt("Enter Number:")

if (Num > 0){
    console.log("Positive")
}else if (Num < 0){
    console.log("Negative")
}else{
    console.log("Zero")
}

// ---------------------------------------------------

let season = Number(prompt("Enter Number"))

switch(season){
    case 1:
        console.log("Winter")
        break
    case 2:
        console.log("Winter")
        break
    case 3:
        console.log("Winter")
        break
    case 4:
        console.log("Spring")
        break
    case 5:
        console.log("Spring")
        break
    case 6:
        console.log("Spring")
        break
    case 7:
        console.log("Summer")
        break
    case 8:
        console.log("Summer")
        break
    case 9:
        console.log("Summer")
        break
    case 10:
        console.log("Autumn")
        break
    case 11:
        console.log("Autumn")
        break
    case 12:
        console.log("Autumn")
        break
    default:
        console.log("Invalid Number")
}