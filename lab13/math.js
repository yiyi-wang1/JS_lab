const add = (num1 = 0, num2 = 0) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof (num1) != "number" || typeof (num2) != "number") {
                rej(new Error("Arguments should be numbers"));
            } else {
                res(num1 + num2);
            }
        })
    })
}

const mult = (num1 = 0, num2 = 0) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof (num1) != "number" || typeof (num2) != "number") {
                rej(new Error("Arguments should be numbers"));
            } else {
                res(num1 * num2);
            }
        })
    })
}

const div = (num1 = 0, num2 = 1) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof (num1) != "number" || typeof (num2) != "number") {
                rej(new Error("Arguments should be numbers"));
            } else {
                res(num1 / num2);
            }
        })
    })
}

const sub = (num1 = 0, num2 = 0) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof (num1) != "number" || typeof (num2) != "number") {
                rej(new Error("Arguments should be numbers"));
            } else {
                res(num1 - num2);
            }
        })
    })
}

const pow = (num1 = 0, num2 = 1) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof (num1) != "number" || typeof (num2) != "number") {
                rej(new Error("Arguments should be numbers"));
            } else {
                res(Math.pow(num1, num2));
            }
        })
    })
}


// module.exports = { add, mult, div, sub, pow };

add(9)

    .then(value => add(9, value))// value is 9

    .then(value => add(2, value))// value is 18

    .then(value => mult(5, value)) // value is 20

    .then(value => div(value, 10)) // r is 100

    .then(console.log); // logs 10


// pow(2)

//     .then(r => pow(2, r)) // r is 2

//     .then(r => pow(2, r)) // r is 4

//     .then(r => mult("fitty-two", r)) // r is 16, but the mult('fitty-two', ...)

//     // should reject

//     .then(console.log) // never makes it here

//     .catch(console.log); // error logs 'fitty-two is not a valid number'


// function promiseMath(a, b, value) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (isNaN(a) || isNaN(b)) {
//           reject("All parameters must be numbers");
//         }
//         resolve(value);
//       });
//     });
// }

// function add(a, b = 0) {
//     return promiseMath(a, b, a + b);
// }