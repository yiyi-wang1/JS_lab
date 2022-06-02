function zip(arrA, arrB) {
    if (arrA.length == arrB.length) {
        const res = [];
        for (i = 0; i < arrA.length; i++) {
            const temp = [];
            temp.push(arrA[i], arrB[i]);
            res.push(temp);
        }
        return res;
    } else {
        return undefined;
    }
}

console.log(zip([1, 2, 3], [4, 5, 6]));
console.log(zip(['firstName', 'lastName'], ['Jon', 'Snow']));
console.log(zip([0, 0, 0], []));
console.log(zip(['x', 'y', 'z'], [5, 6, 10]));