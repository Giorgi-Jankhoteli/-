document.getElementById("text")

document.getElementsByClassName("card")

document.getElementsByTagName("p")

document.querySelector("#card")
document.querySelectorAll(".card")

document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});

function changeText() {
    const el = document.getElementById("text");
    el.textContent = "Text changed!";
    
}

// ----------------------------------------------

let count = 0;

document.getElementById("plus").addEventListener("click", function() {

    count++;
    document.getElementById("count").textContent = count;

});

document.getElementById("minus").addEventListener("click", function(){

    count--;
    document.getElementById("count").textContent = count;

});

// ----------------------------------------------

function toggleColor() {
    const box = document.getElementById("box");
    box.classList.toggle("blue-box");
}

document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("nav").classList.toggle("hidden");
});

// ----------------------------------------------

function del() {
    let value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substring(0, value.length - 1);
}