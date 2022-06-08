//Build a constructor that creates an object

/*

count: 0 //integer
step: 1 //integer
inc: method for increasing count by step
dec: method for decreasing count by step
now: method for returning the current count state

*/
function Counter(count = 0, step = 1) { //set a default value if count/step is not passed an argument
    this.count = count; //this.count = count || 0; //another way to set the default
    this.step = step;
    this.inc = function () {
        this.count += this.step;
        return this;
    };
    this.dec = function () {
        this.count -= this.step;
        return this;
    };
    this.now = function () {
        return this.count;
    }
}

const counter1 = new Counter();
counter1.inc().inc().inc();
console.log(counter1.now());