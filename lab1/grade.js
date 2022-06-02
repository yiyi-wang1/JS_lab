if (process.argv.length < 3) {
    console.log("Please enter a number");
} else {
    const a = parseInt(process.argv[2]);
    if (a < 0 || a > 100) {
        console.log("Invalid grade");
    } else if (a >= 86) {
        console.log("A");
    } else if (a >= 73) {
        console.log("B");
    } else if (a >= 67) {
        console.log("C+");
    } else if (a >= 60) {
        console.log("C");
    } else if (a >= 50) {
        console.log("C-");
    } else {
        console.log("F");
    }
}