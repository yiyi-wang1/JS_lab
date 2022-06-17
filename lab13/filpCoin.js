function flipCoin() {
    return new Promise((res, rej) => {
        const side = Math.floor(Math.random() * 2);
        // 1 will represent tails
        // 0 will represent heads
        if (side == 1) {
            res("tails");
        } else {
            rej("heads");
        }
    })
}

flipCoin().then((result) => {
    console.log("Success " + result);
}).catch((result) => {
    console.log("Faild " + result);
})