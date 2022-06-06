const listToArr = function (obj) {
    const res = [];
    res.push(obj.value);
    while (obj.next != null) {
        obj = obj.next;
        res.push(obj.value);
    }
    return res;
}

const arrToList = function (arr) {
    const res = {};
    if (arr == null || arr.length == 0) {
        return res;
    }
    res.value = arr[0];
    res.next = null;
    let head = res;

    for (i = 1; i < arr.length; i++) {
        const obj = {};
        obj.value = arr[i];
        obj.next = null;
        head.next = obj;
        head = head.next;
    }
    return res;
}

console.log(listToArr({ value: 1, next: null }));
console.log(listToArr({ value: 'a', next: { value: 'b', next: { value: 'c', next: null } } }));

console.log(arrToList([4])); // returns {value: 4, next: null}

console.log(arrToList([4, 3, 2, 1, 0]));