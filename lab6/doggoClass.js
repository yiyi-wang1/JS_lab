class Doggo {

    //constructor is a special method for class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //class methods are lie methods created in a constructor
    //but these methods are prototype methods

    bark() {
        console.log(`${this.name} bark!`);
    }
}

const lucky = new Doggo("lucky", 3);
lucky.bark();

class DoggoFighter extends Doggo {
    constructor(name, age, specialAbility) {
        super(name, age);
        this.specialAbility = specialAbility;
    }

    useSpecial() {
        console.log(`${this.name} uses the special ability: ${this.specialAbility}`)
    }
}

const df1 = new DoggoFighter("dg1", 2, "Ninja attack");
df1.bark();
df1.useSpecial();
