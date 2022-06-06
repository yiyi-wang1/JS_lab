function clone(obj) {
    const res = {};
    for (key in obj) {
        res[key] = obj[key];
    }
    return res;
}

let objA = { a: 1, b: 2 };
let objB = clone(objA);
console.log(objA === objB);