const wordCount = (strings) => {
    const arr = strings.split(" ");
    const wordCount = {};
    for (str of arr) {
        if (wordCount[str] !== undefined) {
            wordCount[str] += 1;
        } else {
            wordCount[str] = 1;
        }
    }

    return wordCount;
}

console.log(wordCount("this is this and that"));