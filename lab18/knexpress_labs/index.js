const express = require('express');
const app = express();

//-----Middleware-----------

//Morgan
const logger = require('morgan');
app.use(logger('dev'));

//Body-parser
app.use(express.urlencoded({ extended: true }));

//Method-override
const methodOverride = require('method-override');
app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        console.log("test if it is run");
        return method;
    }
}))

//-----Router-----------------
app.get('/', (req, res) => {
    res.send("This is home page");
})

const noteRouter = require('./routes/notes')
app.use('/notes', noteRouter);

//-----Set View Engine--------------
app.set('view engine', 'ejs');
app.set('views', 'views');

//-----Server----------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`);
})