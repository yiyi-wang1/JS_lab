// var p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'one');
// });
// var p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'two');
// });
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'three');
// });
// var p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, 'four');
// });
// var p5 = new Promise((resolve, reject) => {
//     reject('reject');
// });

// Promise.all([p1, p2, p3, p4, p5]).then(values => {
//     console.log(values);
// }, reason => {
//     console.log(reason)
// });

// //From console:
// //"reject"

// //You can also use .catch
// Promise.all([p1, p2, p3, p4, p5]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.log(reason)
// });

//   //From console:
//   //"reject"

let p1 = new Promise((resolve, reject) => {
    resolve('成功了')
})

let p2 = new Promise((resolve, reject) => {
    resolve('success')
})

let p3 = Promise.reject('失败')

Promise.all([p1, p2]).then((result) => {
    console.log(result)               //['成功了', 'success']
}).catch((error) => {
    console.log(error)
})

Promise.all([p1, p3, p2]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)      // 失败了，打出 '失败'
})
