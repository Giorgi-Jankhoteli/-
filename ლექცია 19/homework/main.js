let str1 = "Java"
let str2 = "Script"

console.log(str1 + " + " + str2 + " = " + (str1 + str2));

// -------------------------------------------------------

let Str1 = "და"
let Str2 = "იყო"
let txt = "იყო " + Str1 + " არა " + Str2 + " რა"
console.log(String(txt));

// -------------------------------------------------------

let word = "Giorgi"
console.log(word.slice(0, 1));

// -------------------------------------------------------

let text = "პარიზი საფრანგეთის დედაქალაქია"
console.log(text.slice(29, 30))

// -------------------------------------------------------

let capital = "XParis"
console.log(capital.slice(1, 6))

// ------------------------------------------------------- 

let sent = "გამარჯობა xxx, როგორ ბრძანდებით?"
console.log(sent.replace("xxx", "გიორგი"));

// -------------------------------------------------------

let firstNAme = "გიორგი"    
let lastName = "ჯანხოთელი"
let sentence = "დღევანდელი კონკურსის გამარჯვებული xxx yyy"
console.log(sentence.replace("xxx", firstNAme).replace("yyy", lastName))

// --------------------------------------------------------

let year = 1
let month = 6
myStudyPeriod = "მე It Step აკადემიაში უნდა ვისწავლო xxx თვის განმავლობაში"

console.log(myStudyPeriod.replace("xxx", month));

// -------------------------------------------------------

let STR = "პარიზი საქართველოს დედაქალაქია"

console.log(STR.replace("პარიზი", "თბილისი"))

// -------------------------------------------------------

let STRING = "შოკოლადი, ბანანი, ვაშლი"

console.log([STRING])

// -------------------------------------------------------

let person = prompt("Enter your name: ", "")
alert(person.replace(person , "Hello, Giorgi"))

// -------------------------------------------------------

let password = prompt("Enter your password: ")

if (password.length > 8 && password.length < 20 && password.includes("!") || password.includes("@") || password.includes("#") || password.includes("$") || password.includes("%") || password.includes("^") || password.includes("&") || password.includes("*")) {
    alert("Password is valid")
}else {
    alert("Password is invalid")
}