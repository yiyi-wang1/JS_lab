function SubstitutionCipher(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
}

SubstitutionCipher.prototype.encode = function (string) {
    let res = "";
    for (char of string) {
        for (let i = 0; i < this.str1.length; i++) {
            if (char == this.str1.charAt(i)) {
                if (i > this.str2.length) {
                    res += this.str1.charAt(i);
                } else {
                    res += this.str2.charAt(i);
                }
            }
        }
    }
    return res;
}

SubstitutionCipher.prototype.decode = function (string) {
    let res = "";
    for (char of string) {
        for (let i = 0; i < this.str2.length; i++) {
            if (char == this.str2.charAt(i)) {
                if (i > this.str1.length) {
                    res += this.str2.charAt(i);
                } else {
                    res += this.str1.charAt(i);
                }
            }
        }
    }
    return res;
}

let abc1 = "abcdefghijklmnopqrstuvwxyz"; let abc2 = "etaoinshrdlucmfwypvbgkjqxz"; const sub = new SubstitutionCipher(abc1, abc2); sub.encode("abc") // => "eta"
console.log(sub.encode("xyz")); // => "qxz"
console.log(sub.encode("aeiou")); // => "eirfg"
console.log(sub.decode("eta")); // => "abc"
console.log(sub.decode("qxz")); // => "xyz"
console.log(sub.decode("eirfg")); // => "aeiou"
