const membersArr = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8'];
const teamNum = 5;
for (let i = membersArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = membersArr[i];
    membersArr[i] = membersArr[j];
    membersArr[j] = temp;
}

arr = Array.from({ length: teamNum }, (v) => []);
let k = membersArr.length - 1;
while (k >= 0) {
    for (let i = 0; i < teamNum; i++) {
        if (k >= 0) {
            arr[i].push(membersArr[k]);
            k--;
        }
    }
}

console.log(arr);