document.write(
    (function() {
        return "hello world";
    })()
);

setTimeout(
    function() {
        document.write(" - delayed message");
    },
    2000
);

// ------------

function greet(name, callback) {
    document.write("Hello, " + name + "! ");
    callback();
}

greet("Giorgi", function() {
    document.write("Welcome to the callback function.");
});

// ------------

function square(x) {
    return x * x;
}

const square2 = (x) => x * x;

// -------------------------------

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(
    function(number) {
        document.write("Number: " + number + "<br>");
    }
)

// -------------------------------

const doubleNumbers = numbers.map(
    function(number) {
        return number * 2;
    }
);  

document.write("Doubled Numbers: " + doubleNumbers + "<br>");

// -------------------------------

const filteredNumbers = numbers.filter(
    function(number) {
        return number % 2 === 0;
    }
);

document.write("Filtered Numbers: " + filteredNumbers + "<br>");

// -------------------------------

const hasNegative = numbers.some(
    function(number) {
        return number < 0;
    }
);

document.write("Has Negative Numbers: " + hasNegative + "<br>");

// -------------------------------