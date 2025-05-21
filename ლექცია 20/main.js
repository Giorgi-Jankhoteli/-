let number = 1

while (number <= 5) {
    console.log("Hello")
    number++
}

for (let i=1; i <= 20; i++){
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// -------------------------------------

let guests = ["girogi", "giga", "nino", "nana", "gigi"]

let lists = documentsgetElementById("guests")

for (let i = 0; i < guests.length; i++){
    let li = document.createElement("li")
    li.textContent = guests[i]
    lists.appendChild(li)
}