const person = {
    name: "Giorgi",
    age: 17,
    isStudent: true,
}

console.log(person)
console.log(person.name)
console.log(person["name"])

// ----------------------

const user = {
    name: "John",
}

user.age = 30;
user.name = "Doe";
console.log(user)

delete user.name;
console.log(user)   

// ----------------------

const user2 = {
    name: "Alice",
    age: 25,
    address: {
        city: "Tbilisi",
        country: "Georgia",
        zip: "0101"
    }
}

console.log(user2.address.city)

// -----------------------

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

const objc1 = { name: "Alice" };
const objc2 = { age: 25 };
const combinedObject = { ...objc1, ...objc2 };
console.log(combinedObject);

const arr3 = [1, 2, 3];
const arr4 = [0, ...arr3, 4, 5];
console.log(arr4);

// -----------------------

const User = {
    name: "John",
    age: 30,
    city: "Tbilisi",
}

for (const key in User) {
    console.log(key);
    console.log(User[key]);
}