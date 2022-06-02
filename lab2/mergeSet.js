function mergeSet(arrA, arrB) {
    const set = new Set();
    for (value of arrA) {
        set.add(value);
    }
    for (value of arrB) {
        set.add(value);
    }
    return set;
}

let array1 = [1, 2, 3];

let array2 = [3, 4, 5];

console.log(Array.from(mergeSet(array1, array2)));


//not using set structure
function mergeSet(arr1, arr2) {
    // combine arrays
    const combinedArr = arr1.concat(arr2);
    // sort array
    combinedArr.sort();
    // iterate and eliminate like values
    // because we sorted the arrays like values will be beside each other.
    let i = 0;
    while (i < combinedArr.length) {
        // compare elements beside each other. If they are the same remove the extra value and check again.
        if (combinedArr[i] === combinedArr[i + 1]) {
            combinedArr.splice(i + 1, 1); // see documentation for splice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        } else {
            // only increment if they're not the same because if they are the same we will remove an element so (i + 1) will be a brand new value that needs to be checked against i
            i++;
        }
    }
    return combinedArr;
}