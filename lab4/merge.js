function merge(obj1, obj2) {
    if (obj1 == null) {
        return obj2;
    }
    if (obj2 == null) {
        return obj1;
    }
    const res = {};
    for (key in obj1) {
        res[key] = obj1[key];
    }
    for (key in obj2) {
        res[key] = obj2[key];
    }
    return res;
}

console.log(merge({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(merge(

    { firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard' },

    { firstName: 'Harry', lastName: 'Potter' }

));