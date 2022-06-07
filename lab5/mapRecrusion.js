const mapRecrusion = (arr, callback) => {
    if (arr.length == 1) {
        return callback(arr[0]);
    }
    let res = [];
    res.push(callback(arr[0]));
    res = res.concat(mapRecrusion(arr.slice(1), callback));
    return res;
}

const even = n => n % 2 === 0;
const pow2 = n => n ** 2;
const numbers = [1, 2, 3, 4, 5, 6];

console.log(mapRecrusion(numbers, even)); // [false, true, false, true, false, true]
console.log(mapRecrusion(numbers, n => n.toString().repeat(n))); // ['1', '22', '333', '4444', '55555', '666666']
console.log(mapRecrusion(numbers, pow2)); // [1, 4, 9, 16, 25, 36]
const names = ["Cersei", "Jon", "Arya"];
console.log(mapRecrusion(names, name => `Hi, ${name}!`)); // ['Hi, Cersei!', 'Hi, Jon!', 'Hi, Arya!']