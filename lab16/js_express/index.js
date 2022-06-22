const express = require('express');
const app = express();

//Add the Logging Middleware
const logger = require('morgan');

const PORT = 3000;
const DOMAIN = "localhost";

app.use(logger('dev')); //-> init the middleware for all router

app.get('/', (req, res) => {
    // res.send("<h1>Home Page! Hi!<h1>");
    res.render('welcome', {
        title: 'Welcome to My Meme Page',
        memes: [
            "https://www.probytes.net/wp-content/uploads/2018/01/2.jpg",
            "https://www.probytes.net/wp-content/uploads/2018/01/20.png",
            "https://www.probytes.net/wp-content/uploads/2018/01/r_389776_tqMPa-1.jpg",
            "https://www.loginradius.com/blog/async/static/ce430bf1882a235044353d4b4d098275/e85cb/12.png",
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

    res.render('thank_you', {
        fullName: fullName,
        favouriteColour: color,
        favouriteDay: day
    })
})

//Set View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}...`);
});