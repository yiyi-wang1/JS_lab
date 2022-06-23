//Body parser: https://codex.so/handling-any-post-data-in-express

const express = require('express');
const app = express();
//Add the Logging Middleware
const logger = require('morgan');

//Add the path for static assets
const path = require('path');

//Add the cookieParser
const cookieParser = require('cookie-parser');

app.use(logger('dev')); //-> init the middleware for all router
app.use(express.static(path.join(__dirname, 'public')));//->setup the path for assets
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cookieParser());//->add the middleware to all pages

//Custom Middleware
app.use((req, res, next) => {
    const username = req.cookies.username;
    // res.locals are properties set and are avaliable in any views
    res.locals.username = "";
    if (username) {
        res.locals.username = username;
        console.log(`Signed in as ${username}`);
    }
    next();
})

//Routers
app.get('/', (req, res) => {
    // res.send("<h1>Home Page! Hi!<h1>");
    res.render('welcome', {
        title: 'Welcome to My Meme Page',
        memes: [
            "https://www.probytes.net/wp-content/uploads/2018/01/2.jpg",
            "https://www.probytes.net/wp-content/uploads/2018/01/20.png",
            "https://www.probytes.net/wp-content/uploads/2018/01/r_389776_tqMPa-1.jpg",
            "https://res.cloudinary.com/practicaldev/image/fetch/s--MOKp0Jew--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.probytes.net/wp-content/uploads/2018/01/4-1.png"
        ]
    });
})

//DEMO HELLO WORLD
//first argument: path
//second argument: request handler
app.get('/hello_world', (req, res) => {
    res.send("<h1>Hello World<h1>");
})

app.get('/survey', (req, res) => {
    res.render('survey');
})

app.get('/submit', (req, res) => {
    // res.send("Thank you");
    const fullName = req.query.fullName;
    const color = req.query.favouriteColour;
    const day = req.query.favouriteDay;
    console.log(day);

    res.render('thank_you', {
        fullName: fullName,
        favouriteColour: color,
        favouriteDay: day
    })
})

app.post('/sign_in', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24; //a day in millseconds
    res.cookie('username', username, { maxAge: COOKIE_MAX_AGE });
    res.redirect('/');
})

app.post('/sign_out', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
})

//Set View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');


//Server
const PORT = 3000;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}...`);
});