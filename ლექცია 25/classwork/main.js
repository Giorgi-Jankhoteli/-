const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}

console.log(book.author);

book.pages = 180;
book.year = 1926;
delete book.pages;

for (let key in book) {
    console.log(book[key]);
}

// --------------------------------

const key = {
    1: "monday",
    2: "tuesday",   
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
    7: "sunday"
}

console.log(key)

// --------------------------------

let obj = {
'9name': 10,
'key7': 20,
'a-b': 30,
'city 10': 40,
'city10': 50
};

console.log(obj['9name']);
console.log(obj['key7']);
console.log(obj['a-b']);
console.log(obj['city 10']);
console.log(obj['city10']);

// --------------------------------

const person = {
name: "ვაჟა  ცხადაძე",
gender: "მამრობითი"
};

const dob = { data_of_birth: 2011};

const personal = [person, dob];
console.log(personal);

// --------------------------------

const Person = {
name: "ვაჟა  ცხადაძე",
gender: "მამრობითი"
};

const { name, gender } = Person;

console.log(name);
console.log(gender);

// --------------------------------

const PErson = {
name: "ვაჟა ცხადაძე", 
gender: "მამრობითი", 
data_of_birth: 2011
};

function canVote(person) {
    if (person.data_of_birth <= 2005) {
        return true;
    } else {
        return false;
    }
}

console.log(canVote(PErson));