function alphaRange(start, end) {
    const res = [];
    for (i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
        res.push(String.fromCharCode(i));
    }
    return res;
}

function alphaRangeReverse(start, end) {
    const res = [];
    for (i = start.charCodeAt(0); i >= end.charCodeAt(0); i--) {
        res.push(String.fromCharCode(i));
    }
    return res;
}

function alphaRangeStep(start, end, num) {
    const res = [];
    let i = start.charCodeAt(0);
    while (i <= end.charCodeAt(0)) {
        res.push(String.fromCharCode(i));
        i += num;
    }
    return res;
}

function alphaRangeReverseStep(start, end, num) {
    const res = [];
    let i = start.charCodeAt(0);
    while (i >= end.charCodeAt(0)) {
        res.push(String.fromCharCode(i));
        i -= num;
    }
    return res;
}

console.log(alphaRange('a', 'f'));
console.log(alphaRangeReverse('f', 'b'));
console.log(alphaRangeStep('a', 'k', 3));
console.log(alphaRangeReverseStep('z', 't', 2));