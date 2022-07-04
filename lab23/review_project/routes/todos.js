const express = require('express');
const router = express.Router();
const knex = require('../db/client')

//Show the form to create a new todo
router.get('/new', (req, res) => {
    res.render('todos/new', { todo: false });
})

//Create a new todo
router.post('/', (req, res) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const content = req.body.content;
    knex('todos').insert({
        title: title,
        imageUrl: imageUrl,
        content: content
    }).returning('*').then(todos => {
        const newTodo = todos[0]
        res.redirect(`/todos/${newTodo.id}`);
    })
})

//Show all the todos
router.get('/', (req, res) => {
    knex('todos').orderBy('updatedAt', 'desc').then((todos) => {
        res.render('todos/all', { todos: todos });
    })
})

//Show the single todo
router.get('/:id', (req, res) => {
    const id = req.params.id;
    knex('todos').where('id', id).first().then(todo => {
        res.render('todos/show', { todo: todo })
    })
})

//Update
//Show the update page
router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    knex('todos').where('id', id).first().then(todo => {
        res.render('todos/edit', { todo: todo })
    })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    knex('todos').where('id', id).first().update({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        content: req.body.content,
        updatedAt: knex.fn.now()
    }).returning('*').then(todos => {
        const updatedTodo = todos[0];
        res.redirect(`/todos/${updatedTodo.id}`);
    })
})

//Delete
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    knex('todos').where('id', id).first().del().then(() => {
        res.redirect('/todos');
    })
})


module.exports = router;