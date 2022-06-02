function findDuplicates(values) {
    const set1 = new Set();
    const set2 = new Set();
    for (val of values) {
        if (set1.has(val)) {
            set2.add(val);
        } else {
            set1.add(val);
        }
    }
    return Array.from(set2);
}

console.log(findDuplicates([1, 1, 3, 4, 5, 6, 7, 8, 9, 9]));
console.log(findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4]));