let color1 = document.getElementById("color1")
let color2 = document.getElementById("color2")
let color3 = document.getElementById("color3")
let color4 = document.getElementById("color4")
let guess = document.getElementById("guess")

function randomColor(){
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    let first = color1.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
    let second = color2.style.backgroundColor = `rgb(${blue}, ${green}, ${red})`
    let third = color3.style.backgroundColor = `rgb(${green}, ${blue}, ${red})`
    let forth = color4.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

    let allColor = [first, second, third, forth]
    allColor.sort(function(a, b){return 0.5 - Math.random()})

    guess.style.backgroundColor = allColor[0]
}

randomColor()

color1.addEventListener("click", function(){
    if(guess.style.backgroundColor == color1.style.backgroundColor){
        randomColor()
    }else{
        Swal.fire({
            title: "You Picked Wrong Color",
            showComfirmButton: true,
            confirmButtonText: "OK",
        })
    }
})

color2.addEventListener("click", function(){
    if(guess.style.backgroundColor == color2.style.backgroundColor){
        randomColor()
    }else{
        Swal.fire({
            title: "You Picked Wrong Color",
            showComfirmButton: true,
            confirmButtonText: "OK",
        })
    }
})

color3.addEventListener("click", function(){
    if(guess.style.backgroundColor == color3.style.backgroundColor){
        randomColor()
    }else{
        Swal.fire({
            title: "You Picked Wrong Color",
            showComfirmButton: true,
            confirmButtonText: "OK",
        })
    }
})

color4.addEventListener("click", function(){
    if(guess.style.backgroundColor == color4.style.backgroundColor){
        randomColor()
    }else{
        Swal.fire({
            title: "You Picked Wrong Color",
            showComfirmButton: true,
            confirmButtonText: "Try Again",
        })
    }
})