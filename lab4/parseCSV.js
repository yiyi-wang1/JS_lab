const parseCSV = function (csvData) {
    const res = [];
    const csvArray = csvData.split("\n").filter(word => word !== "");
    const keys = csvArray[0].split(",").filter(word => word !== ",");
    // console.log(keys);
    for (i = 1; i < csvArray.length; i++) {
        const data = csvArray[i].split(",").filter(word => word !== ",");
        // console.log(data);
        const temp = {};
        for (j = 0; j < data.length; j++) {
            temp[keys[j]] = data[j];
        }
        res.push(temp);
    }
    return res;

}

const search = function (arr, keyword) {
    for (data of arr) {
        if (data.firstName == keyword || data.lastName == keyword) {
            return data;
        }
    }
}

let csvData = `

id,firstName,lastName,email

1,jane,doe,wildmirror@yahoo.com

2,john,doe,tamepool@hotmail.com

3,sherlock,holmes,mag@glass.com

4,natalia,romanov,8legged@ninja.com

5,peter,quill,starlord@gmail.com

`
// console.log(parseCSV(csvData));
users = parseCSV(csvData);
console.log(search(users, "romanov"));
console.log(search(users, "peter"));