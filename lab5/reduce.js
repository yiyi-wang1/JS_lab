const reduce = (arr, callback, val) => {
    let res = val;
    for (let i = 0; i < arr.length; i++) {
        res = callback(res, arr[i]);
    }
    return res;
}

const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

console.log(reduce(numbers, plus, 0));
console.log(reduce(numbers, (a, b) => a * b, 1));