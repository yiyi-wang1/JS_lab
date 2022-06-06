function toArray(obj) {
    const res = [];
    for (key in obj) {
        const arr = [];
        arr.push(key);
        arr.push(obj[key]);
        res.push(arr);
    }
    return res;
}

console.log(toArray({ a: 1, b: 2, c: 3 }));