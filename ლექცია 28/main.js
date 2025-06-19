function pickColor() {
    const random = Math.floor(Math.random()*pickColor.length)
    return pickColor[random]
} 

function generateRandomColors(num) {
    let arr = []
    for(let i=0; i < num; i++){
        arr.push(pickColor())
    }
    return arr;
}

easyBtn.addEventListner("click", function() {
    easyBtn.classList.add("selected")
    style.backgroundColor = pickColor();
})

Swal.fire("Welcome to the color game", "click the color blocks to guess the color", "info")

Swal.fire({
    title: "enter your name",
    input: "text",
    inputPlaceholder: "Your Name",
    showCancelButton: true,
    confirmButtonText: "Accept",
    cancelButtonText: "cancel",
}).then((result) => {
    if(result,isCofirmed) {
        Swal.fire("hello" + result.value);
    }
})