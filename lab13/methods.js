const wait = require("./wait");

// const red = wait(1000, "monkey");

// red.then((val) => {
//     console.log(val);
// }).catch((val) => {
//     console.log(`rejected: ${val}`);
// })

// const rejectMonkey = wait(1000, "monkeys");
// rejectMonkey.then((val) => console.log(val)).catch((val) => console.log(val));

// Parallel vs Sequential

// console.time('timerA')
// const red = wait(5000, 'red')
// const green = wait(1000, 'green')
// const blue = wait(1000, 'blue')

// red.then(val => {
//     console.log(val);
//     console.timeLog('timberA');
// })

// green.then(val => {
//     console.log(val);
//     console.timeLog('timberA');
// })

// blue.then(val => {
//     console.log(val);
//     console.timeLog('timberA');
// })

//Promise.all
console.time('timerB')
Promise.all([
    wait(3000, 'purple'),
    wait(1000, 'monkey'),
    wait(1000, 'orange')
]).then((val) => {
    console.log(val);
    console.timeLog('timerB')
}).catch((err) => {
    console.log(err);
})