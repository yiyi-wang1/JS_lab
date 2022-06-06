const StringExtras = {
    repeat(string, n) {
        let res = "";
        for (i = 0; i < n; i++) {
            res += string;
        }
        return res;
    },
    leftPad(string, n) {
        if (string.length >= n) {
            return string;
        }
        let res = "";
        for (i = 0; i < n - string.length; i++) {
            res += "*";
        }
        return res += string;
    },
    rightPad(string, n) {
        if (string.length >= n) {
            return string;
        }
        let res = string;
        for (i = 0; i < n - string.length; i++) {
            res += "*";
        }
        return res;
    },
    pad(string, n) {
        if (string.length >= n) {
            return string;
        }
        let res = string;
        for (i = 0; i < n - string.length; i++) {
            if (i % 2 == 0) {
                res = "*" + res;
            } else {
                res = res + "*";
            }
        }
        return res;
    },
    capitalize(string) {
        return string.charAt(0).toUpperCase().concat(string.slice(1, string.length));
    }
}

let a = 'you';

console.log(StringExtras.repeat(a, 3)); // returns 'youyouyou'

console.log(StringExtras.repeat(' ', 6)); // returns '      '

console.log(StringExtras.leftPad(a, 5)); // returns '  you'

console.log(StringExtras.leftPad(a, 1)); // returns 'you'

console.log(StringExtras.leftPad(a, 3)); // returns 'you'

console.log(StringExtras.leftPad(a, 4)); // returns ' you'

console.log(StringExtras.rightPad(a, 6) + 'me'); // returns 'you   me'

console.log(StringExtras.pad(a, 5)); // returns ' you '

console.log(StringExtras.pad(a, 6)); // returns '  you '

console.log(StringExtras.pad(a, 10)); // returns '    you   '

console.log(StringExtras.capitalize(a)); // returns 'You'