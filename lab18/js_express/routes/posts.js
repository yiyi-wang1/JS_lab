const express = require('express');
const knex = require('../db/client');
const router = express.Router();

//------------------POST ROUTES---------------------------

//------------------------Index of all Posts: ---------------

// the below path automatically assumes that is has the '/posts'
router.get('/', (req, res) => {
    knex('posts').orderBy('created_at', 'desc')
        .then(posts => {
            res.render('posts/index', { posts: posts });
        })
})

router.get('/new', (req, res) => {
    res.render('posts/new', { post: false })
})

router.post('/', (req, res) => {
    knex('posts')
        .insert({
            title: req.body.title,
            image_url: req.body.image_url,
            content: req.body.content
        })
        .returning('*')
        .then(posts => {
            console.log(posts);
            const post = posts[0];
            res.redirect(`posts/${post.id}`)
        })
})

router.get('/:id', (req, res) => {
    knex('posts')
        .where('id', req.params.id)
        .first() // this will grab the first instance that matches the requirements
        .then(post => {
            if (!post) {
                res.send('No post found')
            } else {
                res.render('posts/show', { post: post });
            }
        })
})

router.get('/:id/edit', (req, res) => {
    knex('posts').where('id', req.params.id).first()
        .then(post => {
            res.render('posts/edit', { post: post })
        })
})

router.patch('/:id', (req, res) => {
    knex('posts').where('id', req.params.id).first()
        .update({
            title: req.body.title,
            image_url: req.body.image_url,
            content: req.body.content
        }).then(() => {
            console.log(res);
            res.redirect(`${req.params.id}`);
        })
})

router.delete("/:id", (req, res) => {
    knex('posts')
        .where('id', req.params.id)
        .del()
        .then(() => {
            res.redirect('/posts')
        })
})

module.exports = router;