
function insult(name) {
    const randNum = Math.floor(Math.random() * 3)
    if (randNum == 0) {
        return `${name}, you doofus!`;
    }
    else if (randNum == 1) {
        return `${name}, you smell funny!`;
    } else {
        return `${name}, your mother has hamster`;
    }
}

console.log(insult("Bob"));