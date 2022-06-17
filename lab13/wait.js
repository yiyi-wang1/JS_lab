function wait(n, val) {
    return new Promise((res, rej) => {
        if (val === "monkey") {
            rej("no monkeys")
        }
        else {
            setTimeout(() => {
                res(val)
            }, n);
        }
    })
}

module.exports = wait;