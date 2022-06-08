function Counter(count, step = 1) { //set a default value if step is not passed an argument
    this.count = count || 0; //set a default value of 0 if count not passed as an argument
    this.step = step;
}

Counter.prototype.inc = function () {
    this.count += this.step;   //this.count = this.count + this.step
    return this;
}

Counter.prototype.dec = function () {
    this.count -= this.step;
    return this;
}

Counter.prototype.now = function () {
    return this.count; //returns where your count is at
}