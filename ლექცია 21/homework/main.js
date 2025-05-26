let list = []
let list2 = []

for (let i = 0; i < 30; i++) {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    list.push(randomNumber);
    if (randomNumber % 3 === 0) {
        list2.push(randomNumber);
    }
}

console.log(list);
console.log(list2);

// -------------------------------------------------

let list3 = []

for (let i = 0; i < 15; i++) {
    let RandomNumber = Math.floor(Math.random() * 31);
    if (!list3.includes(RandomNumber)) {
        list3.push(RandomNumber);
    }
}

console.log(list3);

// -------------------------------------------------

let arr = [12, 45, 26, 4, 8, 14, 16]
let smallest = arr[0];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }else if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(smallest);
console.log(largest);