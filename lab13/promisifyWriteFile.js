const fs = require("fs");

const pWriteFile = (path, content) => {
    return new Promise((res, rej) => {
        fs.writeFile(path, content, (err) => {
            if (err) {
                rej(err);
            } else {
                res(path);
            }
        })
    })
}

// pWriteFile("./files/file.txt", "The contents of my file")

//     .then(function () { console.log("File write complete!") })

//     .catch(function (error) { console.error(error) })


module.exports = pWriteFile;