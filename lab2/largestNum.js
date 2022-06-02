function largestNumber(arr) {
    let max = arr[0];

    for (value of arr) {
        if (value > max) {
            max = value;
        }
    }
    return max;
}

console.log(largestNumber([40, 2, 13, 34, 42]));
console.log(largestNumber([1, 2, 3, 4, 5, 6]));
console.log(largestNumber([99, 77, 55, 33, 22, 11]));
