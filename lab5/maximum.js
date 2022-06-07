const maximum1 = (arr) => {
    let max = arr[0];
    if (arr.length < 2) {
        return max;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const maximum2 = (arr) => {
    if (arr.length == 1) {
        return arr[0];
    }
    if (arr.length == 2) {
        return (arr[0] > arr[1]) ? arr[0] : arr[1];
    }
    const max = maximum2(arr.slice(1));
    return (arr[0] > max) ? arr[0] : max;
}

console.log(maximum1([213, 12, 66, 999]));
console.log(maximum1([1, 2, 3, 11, 3, 6, 5]));
console.log(maximum2([213, 12, 66, 999]));
console.log(maximum2([1, 2, 3, 11, 3, 6, 5]));