const express = require('express');
const router = express.Router();
const knex = require('../db/client')

router.get('/', (req, res) => {
    knex('contacts').then(list => {
        if (list) {
            marketing = list.filter(contact => contact.department == 'Marketing');
            sales = list.filter(contact => contact.department == 'Sales');
            technical = list.filter(contact => contact.department == 'Technical');
            res.render('contacts/all', { marketing: marketing, sales: sales, technical: technical, contact: false })
        } else {
            res.send("Cannot find the contact list");
        }
    })
})

router.post('/', (req, res) => {
    knex('contacts').insert({
        name: req.body.contactName,
        address: req.body.address,
        department: req.body.department,
        message: req.body.message
    }).returning('*').then(() => {
        res.redirect('/contacts');
    })
})

router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    let marketing, sales, technical;
    knex('contacts').then(list => {
        if (list) {
            marketing = list.filter(contact => contact.department == 'Marketing');
            sales = list.filter(contact => contact.department == 'Sales');
            technical = list.filter(contact => contact.department == 'Technical');
            return knex('contacts').where('id', id).first();
        }
    }).then(contact => {
        res.render('contacts/all', { marketing: marketing, sales: sales, technical: technical, contact: contact })
    })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    knex('contacts').where('id', id).first().update({
        name: req.body.contactName,
        address: req.body.address,
        department: req.body.department,
        message: req.body.message
    }).then(() => {
        res.redirect('/contacts');
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    knex('contacts').where('id', id).first().del().then(() => {
        res.redirect('/contacts');
    })
})

module.exports = router;