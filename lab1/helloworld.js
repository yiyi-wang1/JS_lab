if (process.argv.length < 5) {
    console.log("Please enter 3 number for sides of triangle");
} else {
    const a = parseInt(process.argv[2]);
    const b = parseInt(process.argv[3]);
    const c = parseInt(process.argv[4]);

    if (a + b <= c || a + c <= b || b + c <= a) {
        console.log("Impossible triangle!");
    } else {
        let s = (a + b + c) / 2;
        area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        console.log(`Perimeter: ${a + b + c}`);
        console.log(`Area: ${area}`);
    }
}

// const a = process.argv[2]

// let result = ''

// for (let i = 0; i < a.length; i++) {
//     if (i % 2 == 0) {
//         result = result + a[i].toUpperCase();
//     } else {
//         result = result + a[i].toLowerCase();
//     }
// }

// console.log(result);