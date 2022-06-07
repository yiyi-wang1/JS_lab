const filter = (arr, callback) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const even = function (n) {
    return n % 2 === 0;
}

const odd = function (n) {
    return !even(n);
}

const above = function (min) {
    return function (n) {
        return n > min;
    }
}

const repeatedValue = function (value, index, arr) {
    return index !== arr.indexOf(value);
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(filter(arr, even));
console.log(filter(arr, odd));
console.log(filter(arr, above(3)));
console.log(filter([1, 2, 3, 2, 3, 4, 5], repeatedValue));