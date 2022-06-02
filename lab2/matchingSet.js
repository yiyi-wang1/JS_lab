function matchingSet(arrA, arrB) {
    const res = [];
    //combine A and B
    const combinedArr = arrA.concat(arrB);
    combinedArr.sort();
    let i = 0;
    while (i < combinedArr.length - 1) {
        if (combinedArr[i] === combinedArr[i + 1]) {
            res.push(combinedArr[i]);
        }
        i++;
    }
    //res could have duplicate 
    let j = 0;
    while (j < res.length - 1) {
        if (res[j] === res[j + 1]) {
            res.splice(j + 1, 1);
        }
        j++;
    }

    return res;
}

console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7]));
console.log(matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y']));