const adder = (a, b) => a + b;

function flip(fn) {
    return function (a, b) {
        return fn(b, a);
    }
}

const flipper = (fn) => (a, b) => fn(b, a);

function V(x) {
    return function (y) {
        return function (z) {
            return z(x)(y);
        }
    }
}

const v_fun = (x) => (y) => (z) => z(x)(y);