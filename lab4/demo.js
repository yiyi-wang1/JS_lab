const dog = {
    age: 10,
    //it is allowed to put spaces in key but you need to use quotation
    "first Name": "Benji",
    lastName: "BurlyBottom",
    toys: [
        "Amazon Delivery Box",
        "Pork Leg",
        "Rubber Bunny"
    ],
    bark1: function () {
        console.log("woof");
    },
    bark2: bark,

    //define method without key
    sleep() {
        console.log("zzzzzz");
    }
}

function bark() {
    console.log("woof");
}

// console.log(dog.age);
//if we have spaces in key -> need to use this way to get the value;
// console.log(dog["first Name"]);

dog.age = 19;
// console.log(dog.age);

dog.toys.push("Something Random");
// console.log(dog.toys);
const name = "Name";
// console.log(dog["first " + name]);
// console.log(Object.keys(dog));
// console.log(Object.values(dog));

const cat = {
    name: "Alex"
}

//dog is target and cat is source
//target will be modified but source will not changed
//Properties in the target object are overwritten by properties in the sources if they have the same key.

const catdog = Object.assign(dog, cat)
// console.log(catdog);
// console.log(dog);

// for (key in dog) {
//     console.log(key);
// }

// for (key in dog) {
//     console.log(dog[key]);
// }

// for (key in dog) {
//     console.log("key: ", key, "value: ", dog[key]);
// }

dog.bark1();
dog.bark2();
dog.sleep()