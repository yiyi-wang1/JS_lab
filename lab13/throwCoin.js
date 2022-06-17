function throwCoin() {
    return new Promise((res, rej) => {
        const side = Math.floor(Math.random() * 2);
        const randomTime = Math.floor((Math.random() * 4) + 1) * 1000;
        console.log(randomTime);
        if (randomTime > 3000) {
            setTimeout(() => {
                rej(new Error("Coin was thrown too high"));
            }, randomTime)
        } else {
            setTimeout(() => {
                if (side === 1) {
                    res('tails')
                } else {
                    res('heads')
                }
            }, randomTime);
        }
    })
}


throwCoin().then((result) => {
    console.log(`You got ${result}`);
}).catch((result) => {
    console.log(result);
})

