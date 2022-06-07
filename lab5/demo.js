//////(1, 2) , (9 , 8), ( 67, 42), (56 ,92), (88, 94)....
////// X^2 + 2XY + Y^2
////// X^2 - 2XY + Y^2
////// X^2 + Y^2
////// X^2 - Y^2

// let equ = equation(1, 2)

// let equ1 = equation(9, 8)

// let equ2 = equation(67, 42)

// let equ3 = equation(56, 92)

function equation(x, y, equFn) {
    return equFn(x, y)
}

function equation1(x, y) {
    return x * x + 2 * x * y + y * y
}

function equation2(x, y) {
    return x * x - 2 * x * y + y * y
}

function equation3(x, y) {
    return x * x + y * y
}

function equation4(x, y) {
    return x * x - y * y
}


console.log(equation(1, 2, equation1))
console.log(equation(1, 2, equation2))
console.log(equation(1, 2, equation3))
console.log(equation(1, 2, equation4))






// function formattedFunction(a ,b) {
//     console.log(`the values of this set are ${a} and ${b}`)   
// }

// formattedFunction(1, 2)
// console.log(equ3)


// ///////////////-----------------//////////////////////
// function add(a, b) {
//     const result = a + b
//     return result 
// }

// const adder = function (a, b) {
//     const result = a + b
//     return result 
// }

// add(3, 2)
// adder(3, 2)