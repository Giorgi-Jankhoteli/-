const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

now.getFullYear();

const month = now.getMonth() + 1;
console.log(month);

const day = now.getDate();
console.log(day);

// -------------------------

// console.log(now.setFullYear(2020));
// console.log(now.setMonth(11));
// console.log(now.setDate(25));
// console.log(now.setHours(10));
// console.log(now.setMinutes(30));
// console.log(now.setSeconds(45));

// --------------------------

console.log(now.toLocaleDateString())
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString());

// --------------------------

const num = 123

console.log(num.toString());

const person = {
    Name: 'Giorgi',
    age: 20,
    toString(){
        return `Name: ${this.Name}, Age: ${this.age}`;
    }
}

console.log(person.toString());

// --------------------------

console.log("Start")

setTimeout(() => {
    console.log("Timeout");
}, 3000);

console.log("End");

// setInterval(() => {
//     console.log("Interval");
// }, 2000);

const id = setInterval(() => {
    console.log("Interval");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Interval cleared");
}, 10000);

// --------------------------