function isEven(num) {
    let flag = false;
    while (num >= 0) {
        flag = !flag;
        num--;
    }
    return flag;
}

console.log(isEven(4));
console.log(isEven(19));