function Dog(name) {
    this.name = name;
    // this.bark = function () {
    //     console.log(`${this.name}: test!`)
    // }
}

const d1 = new Dog("rufus");
const d2 = new Dog("Winston");


Dog.prototype.bark = function () {
    console.log(`${this.name}: woof`);
}
Dog.prototype.fetch = function () {
    console.log(`${this.name} is fetching`);
}

d1.bark();
d2.bark();

d2.bark = function () {
    console.log(`${this.name}: bork!`)
}

d1.fetch();
d2.bark();
