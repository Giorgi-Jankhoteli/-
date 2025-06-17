let par = document.querySelector(".p")
console.log(par.textContent)

// ----------------------------------------

document.getElementById("button_1").addEventListener("click", function(){
    console.log("Button 1")
})

document.getElementById("button_2").addEventListener("click", function(){
    console.log("Button 2")
})

document.getElementById("button_3").addEventListener("click", function(){
    console.log("Button 3")
})

// ----------------------------------------

document.getElementById("Button_1").addEventListener("click",     function sum() {
console.log(2 + 2);
},{

})

document.getElementById("Button_2").addEventListener("click", function multiplication() {
 console.log(3 * 3);
},{

})

document.getElementById("Button_3").addEventListener("click", function divide() {
 console.log(4 / 4);
},{

})

// ----------------------------------------

document.getElementById("elem1").addEventListener("click", function myFunc() {
 console.log('საინტერესო შეტყობინება');
})
document.getElementById("elem2").addEventListener("click", function myFunc() {
 console.log('საინტერესო შეტყობინება');
})
document.getElementById("elem3").addEventListener("click", function myFunc() {
 console.log('საინტერესო შეტყობინება');
})

// ----------------------------------------

document.getElementById("Button").addEventListener("click", function myFunc1() {
 alert('საინტერესო შეტყობინება');
})

document.getElementById("Button").addEventListener("click", function myFunc2() {
 alert('სუპერ ღილაკზე მოხდა დაკლიკება');
})

// ----------------------------------------

document.getElementById("myText").addEventListener("click", function myFunc1() {
 alert('შეტყობინება1');
})

document.getElementById("myText").addEventListener("click", function myFunc2() {
 alert('შეტყობინება2');
})

document.getElementById("myText").addEventListener("click", function myFunc3() {
 alert('შეტყობინება3');
})

// ----------------------------------------

document.getElementById("bUtton").addEventListener("dblclick", function(){
    console.log("სუპერ ღილაკზე მოხდა ორმაგი დაკლიკება")
})

// ----------------------------------------

document.getElementById("buttoN").addEventListener("mouseover", function(){
    console.log("სუპერ ღილაკზე მოხდა მაუსის გადატარება")
})

// ----------------------------------------

document.getElementById("buTton").addEventListener("mouseout", function(){
    console.log("სუპერ ღილაკზე მოხდა მაუსის მოცილება")
})

// ----------------------------------------

document.getElementById("buTTon").addEventListener("mouseover", function(){
    console.log("სუპერ ღილაკზე მოხდა მაუსის გადატარება")
})

document.getElementById("buTTon").addEventListener("mouseout", function(){
    console.log("სუპერ ღილაკზე მოხდა მაუსის მოცილება")
})

// ----------------------------------------

let myElem = document.querySelector("#myText")
myElem.textContent = "ახალი პარაგრაფი"

console.log(myElem.textContent)

// ----------------------------------------

document.getElementById("readButton").addEventListener("click", function() {
    let text = document.querySelector("#myPar")
    text.textContent
    console.log(text.textContent)
})