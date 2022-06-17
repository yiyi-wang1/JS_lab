// What is a constructor?
// a constructor is mean to create objects
// We have a Promise constructor/class that makes new promise objects

const { resolve } = require("path");

// Create new Promise with asynchronous function

const waitOneSecond = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Wait one second...");
        resolve("I will build the house in 3 weeks");
        reject("The house is not built in 3 weeks");
    }, 1000)
})

waitOneSecond.then((data) => {
    console.log(data);
}).catch((data) => {
    console.log(data);
    console.log("inside of .catch....promise failed");
})

// We must have resolve or reject for promises to work
// When rejecting, there will be a .catch
// Promise will be completed if either resolved or rejected - only once

// 3 different states an instance of a Promise can be in..
// 1) pending: the async action is still working in the background
// 2) fullfilled: the promise has resolved to a good value
// 3) rejected: the promise has finished to a bad value - rejected

