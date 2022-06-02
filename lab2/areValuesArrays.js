function areValuesArrays(arr) {
    for (value of arr) {
        if (!Array.isArray(value)) {
            return false;
        }
    }
    return true;
}

console.log(areValuesArrays([[1], [2], [4, 5]]));
console.log(areValuesArrays([1, [2], [6, 7, 8]]));
console.log(areValuesArrays([[1], 2, [6, 7, 8]]));
console.log(areValuesArrays(['true', 'false']));