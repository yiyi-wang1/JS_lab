const wait = require("./wait");

const randomTime1 = Math.floor((Math.random() * 4) + 1) * 1000
const randomTime2 = Math.floor((Math.random() * 4) + 1) * 1000
const randomTime3 = Math.floor((Math.random() * 4) + 1) * 1000
const randomTime4 = Math.floor((Math.random() * 4) + 1) * 1000
const randomTime5 = Math.floor((Math.random() * 4) + 1) * 1000
// 1000/2000/3000/4000

Promise.race([
    wait(randomTime1, "horse1"),
    wait(randomTime2, "horse2"),
    wait(randomTime3, "horse3"),
    wait(randomTime4, "horse4"),
    wait(randomTime5, "horse5")
])
    .then((val) => {
        console.log(`${val} wins`);
    })
    .catch((val) => {
        console.log(`Error: ${val}`);
    })
