const chalk = require("chalk");

const color = process.argv[2];
const width = process.argv[3];
const height = process.argv[4];

let res = "";
for (row = 0; row < height; row++) {
    for (col = 0; col < width; col++) {
        if ((row % 2 == 0 && col % 2 == 0) || (row % 2 != 0 && col % 2 != 0)) {
            res += " ";
        } else {
            res += chalk.bgKeyword(color)(" ");
        }
    }
    res += "\n";
}

console.log(res);