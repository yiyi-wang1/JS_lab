const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');


//Constant
const languageArr = ["English", "French", "Spanish"];

//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


//Custom Middleware for Cookies
app.use((req, res, next) => {
    const selection = req.cookies.selection;
    const todos = req.cookies.todos;
    const username1 = req.cookies.username1;
    // const language = req.cookies.language;
    res.locals.username = "";
    res.locals.language = "";
    res.locals.username1 = "";
    if (selection) {
        res.locals.username = selection.username;
        res.locals.language = selection.language;
        // console.log(selection);
    }
    if (todos) {
        res.locals.todos = todos;
    } else {
        res.locals.todos = [];
    }
    if (username1) {
        res.locals.username1 = username1;
    }
    next();
})

app.get('/', (req, res) => {
    res.render('homepage');
})

app.get('/select_language', (req, res) => {
    res.render('select_language', {
        languageArr: languageArr
    });
})

app.post('/select_language', (req, res) => {
    const username = req.body.username;
    const language = req.body.language;
    const selection = {
        username: username,
        language: language
    }
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24; //a day in millseconds
    res.cookie('selection', selection, { maxAge: COOKIE_MAX_AGE });
    res.redirect('/');
})

app.get('/create_todo', (req, res) => {
    res.render('create_todo');
})

app.post('/create_todo', (req, res) => {
    const todo_titile = req.body.todo_title;
    const todo_body = req.body.todo_body;
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24; //a day in millseconds
    let todos;
    if (!req.cookies.todos) {
        todos = []
    } else {
        todos = req.cookies.todos
    }
    todos.push({ title: todo_titile, body: todo_body });
    res.cookie('todos', todos, { maxAge: COOKIE_MAX_AGE });
    res.redirect('/view_todo');
})

app.get('/view_todo', (req, res) => {
    res.render('view_todo');
})

app.post('/sign_in', (req, res) => {
    const username1 = req.body.username1;
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24; //a day in millseconds
    res.cookie('username1', username1, { maxAge: COOKIE_MAX_AGE });
    res.redirect('/');
})

app.post('/sign_out', (req, res) => {
    res.clearCookie('todos');
    res.clearCookie('username1');
    res.redirect('/');
})

//set view engines
app.set('view engine', 'ejs');
app.set('views', 'views');

//server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}...`);
})