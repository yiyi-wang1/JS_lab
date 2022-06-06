const charCount = (strings) => {
    strings = strings.toLowerCase();
    const arr = strings.split("");
    const charCount = {};
    for (str of arr) {
        if (charCount[str] !== undefined) {
            charCount[str] += 1;
        } else {
            charCount[str] = 1;
        }
    }

    return charCount;
}

console.log(charCount("An archer"));