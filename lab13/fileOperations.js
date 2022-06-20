const fs = require("fs");
const pReadFile = require("./promisifyReadFile");
const pWriteFile = require("./promisifyWriteFile");

function pReadDir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err)
            } else {
                resolve(files);
            }
        })
    })
}

pReadDir("./files")
    .then((files) => {
        return Promise.all(files.map(file => pReadFile("./files/" + file, "utf8")));
    }).then((data) => {
        let content = ""
        data.forEach(info => content += info + "\n");
        return pWriteFile("./files/result.txt", content);
    }).then(console.log("Finished writing"))
    .catch(err => {
        console.log(err);
    })