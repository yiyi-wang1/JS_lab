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

// app.get('/fizz_buzz', (req, res) => {

// })

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