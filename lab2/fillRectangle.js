function fillRectangle(width, height, char) {
    const res = [];
    for (i = 0; i < height; i++) {
        const row = [];
        for (j = 0; j < width; j++) {
            row.push(char);
        }
        res.push(row);
    }
    return res;
}

function rectangleToString(arr) {
    const res = [];
    for (i = 0; i < arr.length; i++) {
        res.push(arr[i].join(""));
    }
    return res.join("\n");
}

console.log(rectangleToString(fillRectangle(5, 3, "🔥")));
console.log(rectangleToString(fillRectangle(2, 2, "*")));