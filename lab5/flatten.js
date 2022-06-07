const flatten = (arr) => {
    let res = [];
    for (element of arr) {
        if (Array.isArray(element)) {
            res = res.concat(flatten(element));
        }
        else {
            res.push(element);
        }
    }
    return res;
}

console.log(flatten([1, 2, [3, [4, 5]]])); // returns [ 1, 2, 3, 4, 5 ]
console.log(flatten(['a', ['b', ['c']]])); // returns [ 'a', 'b', 'c' ]
console.log(flatten([[2, 3], [8, [5, 9], [4, 5]], 10])); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]