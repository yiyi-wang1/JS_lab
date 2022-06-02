if (process.argv.length < 4) {
    console.log("Please enter 2 number");
} else {
    const a = parseInt(process.argv[2]);
    const b = parseInt(process.argv[3]);

    if (a == 0 || b == 0) {
        console.log("Numbers cannot be 0");
    } else {
        for (var i = 1; i <= 100; i++) {
            if (i % a == 0 && i % b == 0) {
                console.log("FizzBuzz")
            }
            else if (i % a == 0) {
                console.log("fizz");
            } else if (i % b == 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
}