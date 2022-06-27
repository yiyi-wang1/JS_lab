//Express
const express = require('express');
const app = express();

//Set Middleware
const logger = require('morgan');
app.use(logger('dev'));

const path = require('path');
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

const methodOverride = require('method-override');
app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method;
    }
}))

const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Custom Middleware
app.use((req, res, next) => {
    res.locals.user = "";
    if (req.cookies.user) {
        res.locals.user = req.cookies.user;
        next();
    } else if (req.url == '/log_in') {
        next();
    } else {
        res.render('pages/login');
    }
})

app.get('/', (req, res) => {
    res.render('pages/homepage');
})

app.post('/log_in', (req, res) => {
    const user = req.body.user;
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24;
    res.cookie('user', user, { maxAge: COOKIE_MAX_AGE });
    console.log(res.cookie);
    res.redirect('/');
})

app.post('/log_out', (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
})

const contactRouter = require('./routes/contacts');
app.use('/contacts', contactRouter);

//Set the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}...`);
})