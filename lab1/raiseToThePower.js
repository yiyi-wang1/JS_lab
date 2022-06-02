if (process.argv.length < 4) {
    console.log("Please enter two number");
} else {
    const base = parseInt(process.argv[2]);
    const power = parseInt(process.argv[3]);
    const res = Math.pow(base, power);
    console.log(res);
}