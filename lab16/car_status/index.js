const express = require('express');
const logger = require('morgan');
const fs = require('fs').promises;
const { dirname } = require('path');
const appDir = dirname(require.main.filename);
const app = express();
const PORT = 3000;


app.use(logger('dev'));

app.get('/', (req, res) => {
    // res.send("HomePage");
    res.render('homepage');
})

app.get('/car_status', (req, res) => {
    const year = req.query.year;
    let result = "";
    if (year) {
        if (year < 1990) {
            result = "very old"
        } else if (year < 2010) {
            result = "old";
        } else if (year <= 2022) {
            result = "new";
        } else {
            result = "future";
        }
    }
    res.render('car_status', {
        result: result
    });
})

app.get('/random_person', (req, res) => {
    const nameList = req.query.list;
    let name = "";
    console.log(nameList);
    if (nameList) {
        const arr = nameList.split(",").filter(x => x);
        console.log(arr);
        const random = Math.floor(Math.random() * (arr.length));
        name = arr[random];
    }
    res.render('random_person', { name: name });
})

app.get('/fizz_buzz', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    console.log(num1, num2);
    let arr = [];
    if (num1 && num2) {
        for (let i = 1; i <= 100; i++) {
            if (i % num1 == 0 && i % num2 == 0) {
                arr.push("FizzBuzz");
            } else if (i % num1 == 0) {
                arr.push("Fizz");
            } else if (i % num2 == 0) {
                arr.push("Buzz");
            } else {
                arr.push(i);
            }
        }
    }
    console.log(arr);
    res.render('fizz_buzz', { arr: arr });
})

app.get('/directory_lister', (req, res) => {
    fs.readdir(appDir).then(files => {
        res.render('directory_lister', { files: files });
    }).catch(err => {
        console.log(err);
    })
})

//Set View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})