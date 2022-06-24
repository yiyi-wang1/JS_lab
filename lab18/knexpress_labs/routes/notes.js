const express = require('express');
const router = express.Router();

//connect to db
const knex = require('../db/client');

//------------CRUD-----------------------

//CREATE 
//show new note page
router.get('/new', (req, res) => {
    res.render('notes/new');
})

router.post('/', (req, res) => {
    //connect with db to insert
    const content = req.body.content;
    knex('notes').insert({
        content: content
    })
        .returning('*')
        .then(notes => {
            const newNote = notes[0];
            res.redirect(`/notes/${newNote.id}`);
        })
})

//READ
//get all notes from database
router.get('/', (req, res) => {
    knex('notes').orderBy('created_at', 'desc').then((notes) => {
        if (notes) {
            res.render('notes/all', { notes: notes });
        } else {
            res.send("Cannot find notes");
        }
    })
})

//get single note by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    knex('notes').where('id', id).first().then((note) => {
        if (note) {
            res.render('notes/show', { note: note })
        } else {
            res.send(`Cannot find note: ${id}`);
        }
    })
})

//UPDATE
//show update page
router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    knex('notes').where('id', id).first().then((note) => {
        res.render('notes/edit', { note: note })
    })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const newContent = req.body.content;
    knex('notes').where('id', id).first().update({
        content: newContent
    }).then(() => {
        res.redirect(`/notes/${id}`);
    })
})

//DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    knex('notes').where('id', id).first().del()
        .then(() => {
            res.redirect('/notes');
        })
})

module.exports = router;