//Express
const express = require('express');
const app = express();

//Setup Middleware
// 1. Morgan
const logger = require('morgan');
app.use(logger('dev'));

//2.Body-parser
app.use(express.urlencoded({ extended: true }));

//3.Public static
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//4.Method-override
const methodOverride = require('method-override');
app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method;
    }
}))

app.get('/', (req, res) => {
    res.render('homepage');
})

//Router
const billsRouter = require('./routes/bills');
app.use('/bills', billsRouter);

//Set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');//set the views directory

//Setup Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`);
})