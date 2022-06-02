function reverse(s) {
    const res = [];
    for (var i = s.length - 1; i >= 0; i--) {
        res.push(s.charAt(i));
    }
    return res.join("");
}

console.log(reverse("hello"));
console.log(reverse("nor"));
console.log(reverse("codecore"));