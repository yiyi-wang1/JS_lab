function throwDie(num) {
    return new Promise((res, rej) => {
        const random = Math.floor(Math.random() * (num - 1 + 1) + 1);
        const randomTime = Math.floor(Math.random() * 3 + 3) * 1000;
        setTimeout(() => {
            res(random);
        }, randomTime)
    })
}

throwDie(12).then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
})