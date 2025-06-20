const num = document.getElementById("num")
const numOutput = document.getElementById("numOutput")
const numRegex = /^\d+$/

num.addEventListener("keypress", function(){
    numOutput.innerText = numRegex.test(num.value) ? "Numbers" : "Please write down only numbers";
})

// --------------------------------

const text = document.getElementById("text");
const textOutput = document.getElementById("textOutput");
const textRegex = /^[A-Za-z]+$/;

text.addEventListener("keyup", function () {
    if (textRegex.test(text.value)) {
        textOutput.innerText = `You entered ${text.value.length} letters`;
    } else {
        textOutput.innerText = "";
    }
});


// --------------------------------

const image = document.getElementById("image");
const imageOutput = document.getElementById("imageOutput");

image.addEventListener("change", function () {
    const file = image.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        imageOutput.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file); 
    }
});

// --------------------------------

const iMage = document.getElementById("saveImage"); 
const ImageOutput = document.getElementById("savedImage");
const saved = localStorage.getItem("savedImage");

if (saved) {
    ImageOutput.src = saved;
    ImageOutput.style.display = "block";
}

iMage.addEventListener("change", function () {
    const file = iMage.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        localStorage.setItem("savedImage", reader.result);
        ImageOutput.src = reader.result;
        ImageOutput.style.display = "block";
    };

    if (file) {
        reader.readAsDataURL(file); 
    }
});

// --------------------------------

const iMages = document.getElementById("SaveImage");
const IMageOutput = document.getElementById("SavedImage");
const info = document.getElementById("info");

image.addEventListener("change", function () {
    const file = iMage.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        IMageOutput.src = reader.result;
    };

    if (file) {
        const size = (file.size / 1024).toFixed(2);
        const type = file.type;

        info.innerText = size + " KB " + type;

        reader.readAsDataURL(file);
    }
});

// --------------------------------

const email = document.getElementById("email");
const result = document.getElementById("emailResult");
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

email.addEventListener("keyup", function () {
    result.innerText = regex.test(email.value) ? "Email is correct" : "Email is incorrect";
});

// --------------------------------

const password = document.getElementById("password");
const passResult = document.getElementById("passResult");
const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

password.addEventListener("keyup", function () {
    if (passRegex.test(password.value)) {
        passResult.innerText = "Password is correct";
        passResult.style.color = "green";
    } else {
        passResult.innerText = "Password is incorrect";
        passResult.style.color = "red";
    }
});

// --------------------------------

const pngImage = document.getElementById("pngImage")
const pngResult = documebt.getElementById("pngResult")

pngImage.addEventListener("change", function () {
    const file = iMage.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        IMageOutput.src = reader.result;
    };

    if (file.type === "image/png"){
        pngResult.src = reader.result;
    }else{
        alert("Only PNG file")
    }
});

// -----------------------------------------

const tel = document.getElementById("telNumber");
const telResult = document.getElementById("telResult");
const telRegex = /^(\+995)?(5\d{8})$/;

tel.addEventListener("keyup", function () {
    if (telRegex.test(tel.value)) {
        telResult.innerText = "Is Georgian Number";
        telResult.style.color = "green";
    } else {
        telResult.innerText = "Isn't Georgian Number";
        telResult.style.color = "red";
    }
});
