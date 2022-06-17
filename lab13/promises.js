//How to use promises before creating our own

const fs = require('fs').promises; // all of the same functions available, but just as promises

const p = fs.readFile("./files/file1.txt", "utf8") //returns. promise

//p is promise (object) that represents an ayschronous action
//it will have a value sometime in the future
//so we are saving it as a variable "p"

//We still have to pass the promise a callback. but not in the traditional way
//Instead, we use a method called .then, which is a method that accepts a callback as it's argument
//the argumentss will be slightly different depending on the promise
//but in this case it is data that callback is accepting

p.then(data => {
    console.log(data);
    return fs.readFile("./files/file2.txt", "utf8");
}).then(data => {
    console.log(data);
    return fs.readFile("./files/file3.txt", "utf8");
}).then(data => {
    console.log(data);
})


// p.then((data) => {
//     console.log(data);
//     return fs.readFile('./files/file2.txt', 'utf8')
// }).then((data) => {
//     console.log(data);
//     console.log('print first');
//     return fs.readFile('./files/file3.txt', 'utf8')
// }).then(() => {
//     return console.log('Hi');
// }).then((data) => {
//     console.log('Hi');
//     console.log(data);
// })

