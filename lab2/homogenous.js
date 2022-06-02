function isHomogenous(arr) {
    if (arr.length < 2) {
        return true;
    } else {
        for (i = 0; i < arr.length - 1; i++) {
            if (typeof (arr[i]) !== typeof (arr[i + 1])) {
                return false;
            } else {
                if (Array.isArray(arr[i]) && !Array.isArray(arr[i - 1])) {
                    return false;
                }
            }
        }
        return true;
    }
}

console.log(isHomogenous([1, 2, 3]));
console.log(isHomogenous(['a', 'b', 'c']));
console.log(isHomogenous([[2], 'Xavier']));
console.log(isHomogenous([[2], { colour: 'blue' }]));
console.log(isHomogenous([1, '2', 3]));
