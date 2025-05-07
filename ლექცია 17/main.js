console.log("Hello World")

// --------------------------------------------

let number = 5
console.log("the number is: " + number)

number = 10
console.log("the number now is: " + number)

// --------------------------------------------

const num = 5
console.log("the num is: " + num)

num = 10 //this will cause an error because num is a constant

// --------------------------------------------

var num2 = 5
console.log("the num2 is: " + num2)  

num2 = 10
console.log("the num2 now is: " + num2)

// --------------------------------------------

// ცვლადების ტიპები:

Number
// let Number = 5

String
// let String = "Hello World"

Boolean
// let Boolean = true / false

undefined
// let x;
// console.log(x)

null
// let y = null;
// console.log(y)

NaN
// let z = "Hello" * 5;
// console.log(z)

// --------------------------------------------

let person = {
    name: "",
    email: "",
    age: "",
}

function greet(name) {
    console.log("Hello" + name)
}
greet("Giorgi")

// --------------------------------------------

let name = prompt("Enter Your Name: ")
console.log("Hello" + name + "!")

let result = confirm("Are you sure?")
alert(result)

// --------------------------------------------

let Name = "Giorgi"
console.log(typeof Name) //String

// --------------------------------------------

let num3 = 17 % 5
console.log(num3)

let num4 = 17 / 5
console.log(num4)

let x=5
x++

let y=5
let z="5"
console.log(z==y)
console.log(z===y)

// --------------------------------------------

document.write("Hello World")
document.write("<h1>Hello World</h1>")

// --------------------------------------------