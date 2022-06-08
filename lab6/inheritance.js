function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function () {
    console.log(`${this.name}: woof`);
}
Dog.prototype.fetch = function () {
    console.log(`${this.name} is fetching`);
}

const rufus = new Dog("Rufus");
const winston = new Dog("Winston");

//constructors for fighter

function DoggoFighter(name, specialAbility) {
    this.name = name;
    this.specialAbility = specialAbility;
}

DoggoFighter.prototype.useSpecial = function () {
    console.log(`${this.name} uses ${this.specialAbility}`);
}

const doge = new DoggoFighter("doge", "ninja attack");

doge.useSpecial();

// DoggoFighter.prototype.__proto__ = Dog.prototype
//another way to do it: To set DoggoFighter as child and Dog as parent
Object.setPrototypeOf(DoggoFighter.prototype, Dog.prototype);

//check the 
console.log(doge.__proto__ === DoggoFighter.prototype) //true
console.log(doge.__proto__ === Dog.prototype) //false
console.log(DoggoFighter.prototype === Dog.prototype) //false

doge.bark();
doge.useSpecial();
