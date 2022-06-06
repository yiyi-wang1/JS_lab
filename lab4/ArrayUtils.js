const ArrayUtils = {
    last(arr) {
        return (arr[arr.length - 1]);
    },
    first(arr) {
        return (arr[0]);
    },
    take(arr, n) {
        if (n > arr.length) {
            return "n is greater then the arr length"
        }
        const res = [];
        for (i = 0; i < n; i++) {
            res.push(arr[i]);
        }
        return res;
    },
    toObject(arr) {
        const obj = [];
        for (arr1 of arr) {
            const key = arr1[0];
            const value = arr1[1];
            obj[key] = value;
        }
        return obj;
    }
}

console.log(ArrayUtils.first([1, 2, 3, 4]));
console.log(ArrayUtils.last([1, 2, 3, 4]));
console.log(ArrayUtils.take([1, 2, 3, 4], 3));
console.log(ArrayUtils.toObject([["a", 1], ["b", 2], ["c", 3]]));