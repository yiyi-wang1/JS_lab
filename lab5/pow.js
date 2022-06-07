const pow = (base, exp) => {
    if (exp == 0 || exp == 1) {
        return exp == 0 ? 1 : base;
    }
    return exp % 2 == 0 ? pow(base * base, Math.floor(exp / 2)) : base * pow(base * base, Math.floor(exp / 2));
}


const pow1 = (base, exp) => {
    if (exp == 1) {
        return base;
    }
    return base * pow1(base, exp - 1);
}

console.log(pow(10, 3)) // 1000
console.log(pow(2, 4))// 16
console.log(pow(0, 100)) // 0
console.log(pow(1, 1000)) // 1

console.log(pow1(10, 3)) // 1000
console.log(pow1(2, 4))// 16
console.log(pow1(0, 100)) // 0
console.log(pow1(1, 1000)) // 1