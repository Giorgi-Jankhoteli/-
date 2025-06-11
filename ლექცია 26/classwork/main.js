const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

// -------------------------------------

const date = new Date(2020, 0, 15);

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(year + "-" + month + "-" + day);

// -------------------------------------

console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString());

// -------------------------------------

function isSUmmer(date) {
    const month = date.getMonth();
    return month >= 5 && month <= 8;
}

console.log(isSUmmer(now));

// -------------------------------------

const currentDate = new Date();
console.log(currentDate.toString());

// -------------------------------------

setTimeout(() => {
    console.log("Hello World");
}, 3000);

// -------------------------------------

const stop = setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleTimeString());
}, 1000);

// --------------------------------------

setTimeout(() => {
    clearInterval(stop);
    console.log("Interval stopped");
}, 5000);

// -------------------------------------

const seconds = prompt("Enter seconds:");

setTimeout(() => {
    console.log(`Your ${seconds} seconds are over!`);
}, seconds * 1000);

// -------------------------------------

const today = new Date();
const nextYear = today.getFullYear() + 1;
const newYear = new Date(nextYear, 0, 1);

const timeDiff = newYear - today;
console.log('Time difference:', timeDiff, 'milliseconds');

const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
console.log('Days until New Year:', days);
