function printMulti(arr) {
    for (value of arr) {
        if (Array.isArray(value)) {
            for (num of value) {
                console.log(num);
            }
        } else {
            console.log(value);
        }
    }
}
const myArray = [[2, 3, 4], ["Hello CodeCore", 1, true]];
printMulti(myArray);