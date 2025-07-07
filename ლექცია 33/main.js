// Classwork

class animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
    makesound(){
        console.log(`The ${this.name} goes ${this.sound}`);
    }
}

class Bird extends animal{
    fly(){
        console.log(`The ${this.name} is flying`)
    }
}

// --------------------------------------------

// Homework

class employee{
    constructor(name, position){
        this.name = name;
        this.position = position;
    }
    work(){
        console.log(`my name is ${this.name} and i work as a ${this.position}`)
    }
}

class manager extends employee{
    manage(){
        console.log("i manage team")
    }
}