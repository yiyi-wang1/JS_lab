const express = require('express');
const app = express();


//Setup Middleware
//1. Morgan
const logger = require('morgan');
app.use(logger('dev'));

//2. Body-parser
app.use(express.urlencoded({ extended: true }));

//3. Method-override
const methodOverride = require('method-override');
app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method;
    }
}))

//4. Static
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))


//5. Cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());


//6. Custom middleware
app.use((req, res, next) => {
    const username = req.cookies.username || "";
    res.locals.username = username;
    next();
})

//Router
const todoRouter = require('./routes/todos');
app.use('/todos', todoRouter);

app.get('/', (req, res) => {
    res.render('homePage/home');
})

//login and logout
app.post('/login', (req, res) => {
    const username = req.body.username;
    const COOKIE_MAX_LENGTH = 60 * 60 * 24 * 1000;
    res.cookie('username', username, { maxAge: COOKIE_MAX_LENGTH });
    res.redirect('/');
})

app.post('/logout', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
})


//Setup view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Setup server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The app is running on http://localhost:${PORT}...`)
})