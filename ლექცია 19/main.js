console.log("Hello World");

console.log(Math.pow(2, 3)); 
console.log(Math.sqrt(16)); 
console.log(Math.abs(-5));

console.log(Math.random());
console.log(Math.floor(Math.random() * 101));
console.log(Math.round(4.5));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(parseInt("10"));
console.log(parseInt("10.5"));
console.log(parseFloat("10.5"));

console.log(isNaN("Hello"));
console.log(isNaN("10"));

let text = "Hello, World!";
console.log(text.search("World"));
console.log(text.replace("World", "JavaScript"));
console.log(text.slice(0, 5));
console.log(text.substring(0, 5));
console.log(text.length)
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log("Hello".concat(" How are you?"));
console.log(text.includes("World"));
console.log(text.includes("Giorgi"));

let string = "    Hello,World!      ";
console.log(string.trim());
console.log(string.trimStart());
console.log(string.trimEnd());