const monthNames = {
    1: 'იანვარი',
    2: 'თებერვალი',
    3: 'მარტი',
    4: 'აპრილი',
    5: 'მაისი',
    6: 'ივნისი',
    7: 'ივლისი',
    8: 'აგვისტო',
    9: 'სექტემბერი',
    10: 'ოქტომბერი',
    11: 'ნოემბერი',
    12: 'დეკემბერი'
}

console.log(monthNames);

// --------------------------------

const person = {
    name: "Giorgi",
    surname: "Jankhoteli",
    gender: "male",
}

console.log(person.name + " " + person.surname + " " + person.gender);

// --------------------------------

const date = {
    day: "09",
    month: "06",
    year: "2025"
}

console.log(date)

// --------------------------------

let obj = {
    key11: "მნიშვნელობა1", 
    key8: "მნიშვნელობა2", 
    key4: "მნიშვნელობა3" 
}

// --------------------------------

let obje = {
'9name': 10,
'key7': 20,
'a-b': 30,
'city 10': 40,
'city10': 50
};

// --------------------------------

let products = {
    pr1: "banana",
    pr2: "strawberry",
    pr3: "apple",
    pr4: "strawberry",
    pr5: "kiwi",
    pr6: "peach",
    pr7: "strawberry",
}

function changestrawberry(obj) {
    for (let key in obj) {
        if (obj[key] === "strawberry") {
            obj[key] = "cherry";
        }
    }
}

changestrawberry(products);
console.log(products);

// --------------------------------

const car = {
    model: {
        manufacturer: "BMW",
        mark: "X6"
    },

    color: "black",
    is_left_hand_drive: false,
    numbeer_of_doors: 5,
}

console.log(car.model.manufacturer, car.model.mark)

// --------------------------------

const Car = {
    model: {
        manufacturer: "BMW",
        mark: "X6"
    },

    color: "black",
    is_left_hand_drive: false,
    number_of_doors: 5,
}

Car.color = "white";
Car.is_left_hand_drive = true;

console.log(Car)

// --------------------------------

let obj1 = {a: 7, b: 8, c: 9};

function cube(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = Math.pow(obj[key], 2);
        }
    }
}

console.log(obj1);
cube(obj1);

// --------------------------------

const book = {
 title: "JavaScript: The Definitive Guide",
 author: "David Flanagan",
 publisher: "O'Reilly Media",
 year_of_publication: 2011
};

for (let key in book) {
    console.log(book[key]);
    console.log(book);
}

// --------------------------------

const Book = {
 title: "JavaScript: The Definitive Guide",
 author: "David Flanagan"
};

const Year = {
 year_of_publication: 2011
};

const mergeBook = { ...Book, ...Year };
console.log(mergeBook);

// --------------------------------

const user = {
 userName : "superadmin",
 password: "Godzilla"
};

const { userName, password } = user;
console.log(userName, password);

// --------------------------------

const student = {
 studentName : "პეტრე მგელაძე",
 paydVolum: 700
}

function canEnrollToCourse(student) {
    if (student.paydVolum >= 1125) {
        return true;
    } else {
        return false;
    }
}

console.log(canEnrollToCourse(student));

// --------------------------------

const purchases = {
 foods : ["Apples", "Bananas", "Eggs", "Cucumber", "Cheese"],
 amountPaid: [4, 6, 4, 12, 15],
 date: "27/11/2021"
};

function getTotalAmount(purchases) {
    let total = 0;
    for (let i = 0; i < purchases.amountPaid.length; i++) {
        total += purchases.amountPaid[i];
    }
    return total;
}

console.log(getTotalAmount(purchases));

// --------------------------------

const CAr = {
 manufacturer: {
 name: "BMW",
 location: "Munich, Germany",
 year_of_establish: 1916
 },
 model: "X6",
 color: "black",
 is_left_hand_drive: false
}

function getFullModelCar(car) {
    return CAr.manufacturer.name + " " + CAr.manufacturer.location + " " + CAr.manufacturer.year_of_establish + " " + car.model + " " + car.color + " " + car.is_left_hand_drive;
}

console.log(getFullModelCar(CAr));

// --------------------------------

const Purchases = [{
 item: "hammer",
 price: 22
},
{
 item: "screwdriver",
 price: 17
},
{
 item: "nails",
 price: 8
}]

function getTotalPrice(purchases) {
    let total = 0;
    for (let i = 0; i < purchases.length; i++) {
        total += purchases[i].price;
    }
    return total;
}

console.log(getTotalPrice(Purchases));

// --------------------------------

function getAveragePrice(purchases) {
    let total = 0;
    for (let i = 0; i < purchases.length; i++) {
        total += purchases[i].price;
    }
    return Math.floor(total / purchases.length);
}

console.log(getAveragePrice(Purchases));

// --------------------------------

let Person = {
 firstName: "ნათია",
 age: 30,
};

function greetPerson(person) {
    document.write("Hello, " + person.firstName + "! You are " + person.age + " years old.");
}

console.log(greetPerson(Person));

// --------------------------------

const Prod = {
    weight : 1.5,
    price : 20,
    quantity : 3,
    photo : "https://example.com/photo.jpg"
}

function onStock(product) {
    if (product.quantity === 0) {
        document.write("Product is out of stock");
    }else {
        document.write("Product is in stock");
    }
}

console.log(onStock(Prod));

// --------------------------------

const stud = {
 studentName : "პეტრე მგელაძე",
 paydVolum: 700
}


function changeProperty(key, value, obj) {
    stud.studentName = "John Doe";
    stud.paydVolum = 1000;
}

changeProperty('studentName', 'როინი ვეკუა', stud);
changeProperty('paydVolum', 900, stud);