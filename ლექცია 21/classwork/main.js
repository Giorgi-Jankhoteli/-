let list = []

for (let i = 0; i < 15; i++) {
    let randomNumber = Math.floor(Math.random() * 51) + 50;
    list.push(randomNumber);
}

console.log(list)

// ----------------------------------------------

let arr = [1, 2, "one", "two"]

let number = arr[0] + arr[1];
console.log(number);

// -----------------------------------------------

let toys = ["Teddy Bear", "Lego Set", "Action Figure", "Doll",];

function getFirstToy() {
    return toys[0];
}

console.log(getFirstToy());

// ------------------------------------------------

let array = [10, 20, 30, 40, 50];
let sum = array[0] + array[1] + array[2] + array[3] + array[4];
console.log(sum);

// ------------------------------------------------

let arraY = [10, 20, 30, 40, 50];

arraY.unshift("00")
arraY.push("60")
console.log(arraY);

// ------------------------------------------------

let names = ['ხვიჩა', 'გოგა', 'მაკა', 'ანა', 'ინა']

names.shift()
names.pop()
console.log(names);
