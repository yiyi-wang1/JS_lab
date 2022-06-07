const arr = ['a', 'b', 'c', 'd'];

const myRepeat = (str, n) => str.repeat(n);

console.log(arr.map(myRepeat));

function myMap(callback, arr) {
    const newArr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        newArr.push(callback(element, index));
    }
    return newArr;
}

console.log(myMap(myRepeat, arr));
console.log(myMap(x => x + x, arr));