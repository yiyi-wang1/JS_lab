//  Review of Callbacks

// We use callbacks to do something after an asynchronous action
// All async functions accept a callback. The callback allows
// us to do something after the async action 

const callback = () => {
    console.log('No... now it ends')
}

console.log('I wish you had good fortune in the wars to come... and now it begins');

//this is will wait for 2000 and then call the callback function
setTimeout(callback, 2000)

//fs.readFile

const fs = require('fs');

fs.readFile('./files/file1.txt', 'utf8', (err, data) => {
    if (err) {
        // throw an Error(err)
    } else {
        console.log(data);
    }
})

console.log('print first');

console.log('print second');

//it will print:
//'I wish you had good fortune in the wars to come... and now it begins'
//'print first'
//'print second'
//'No... now it ends' (from the callback function)