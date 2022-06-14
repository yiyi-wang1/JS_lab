const fs = require("fs");

const path = process.argv[2];
const output = process.argv[3];
let res = "";

fs.readFile(path, { encoding: "utf8" }, (err, data) => {
    if (err) {
        console.log(`Cannot read the file ${path}, please see the error!`, err);
    } else {
        const row = data.split("\n");
        res += row[0] + "\n";
        for (let i = 1; i < row.length; i++) {
            const info = row[i].split(",");
            if (info[2] == "no") {
                res += row[i] + "\n";
            }
        }

        fs.writeFile(output, res, err => {
            if (err) {
                console.log(`Cannot write into the file ${path}, please see the error!`, err);
            } else {
                console.log('File was created!');
            }
        })
    }
})
