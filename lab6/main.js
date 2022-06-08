const guest1 = {
    name: "Steph",
    email: "sample@gmail.com",
    visitTime: "9:10am",
    phone: "604-555-5555",
    printGuest: function () {
        console.log(`${this.name} visited us at ${this.visitTime} today`)
    }
}

const guest2 = {
    name: "Bob",
    email: "samplebob@gmail.com",
    visitTime: "11:10am",
    phone: "604-555-5555",
    printGuest: function () {
        console.log(`${this.name} visited us at ${this.visitTime} today`);
    }
}

// guest1.printGuest();
// guest2.printGuest();

// Creating constructor

function Guest(name, email, visitTime, phone) {
    this.name = name;
    this.email = email;
    this.visitTime = visitTime;
    this.phone = phone;
    this.printGuest = function () {
        console.log(`${this.name} visited us at ${this.visitTime} today`);
    }
    return console.log("Don't fire off 'this' in a constructor function");
}

//here print the console.log
const g1 = new Guest("Sally", "sally@gmail.com", "12:10pm", "604-555-5555");
const g2 = new Guest("Sally1", "sally@gmail.com", "12:10pm", "604-555-5555");

//print the instance of object
console.log(g1);
// g1.printGuest();

//Method to check if something is an instance of a constructor
console.log(guest1 instanceof Guest) //false
console.log(g1 instanceof Guest) //true
