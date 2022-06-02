function closestNeighbors(n, a, b, c) {
    const res = [];
    let i = n;
    while (i > 0) {
        if (i % a == 0 && i % b == 0 && i % c == 0) {
            res.push(i);
            break;
        }
        i--;
    }
    let j = n;
    while (true) {
        if (j % a == 0 && j % b == 0 && j % c == 0) {
            res.push(j);
            break;
        }
        j++;
    }
    return res;
}

console.log(closestNeighbors(20, 2, 3, 4));
console.log(closestNeighbors(100, 3, 4, 5));
console.log(closestNeighbors(3000, 7, 13, 31));