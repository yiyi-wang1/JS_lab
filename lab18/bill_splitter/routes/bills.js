const express = require('express');
const router = express.Router();

//connect with db
const knex = require('../db/client');

//CRUD

//CREATE
//show create page
router.get('/new', (req, res) => {
    res.render('bills/new');
})

//create bill in db
router.post('/', (req, res) => {
    knex('bills').insert({
        billTotal: req.body.billTotal,
        taxPercent: req.body.taxPercent,
        tipPercent: req.body.tipPercent,
        groupSize: req.body.groupSize
    }).returning('*').then((bills) => {
        const newBill = bills[0];
        res.redirect(`/bills/${newBill.id}`);
    })
})

//READ
//show all bills
router.get('/', (req, res) => {
    knex('bills').orderBy('created_at', 'asc').then(bills => {
        if (bills) {
            res.render('bills/all', { bills: bills });
        } else {
            res.send("Cannot find the bills");
        }
    })
})

//show one single bill
router.get('/:id', (req, res) => {
    const id = req.params.id;
    knex('bills').where('id', id).first().then(bill => {
        if (bill) {
            const total = bill.billTotal;
            const tax = (bill.taxPercent * 0.01) * total;
            const tip = (bill.tipPercent * 0.01) * total;
            const result = (total + tax + tip) / bill.groupSize;
            res.render('bills/show', { bill: bill, result: result });
        } else {
            res.send("Cannot find the bills");
        }
    })
})

//UPDATE
//show the update page
router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    knex('bills').where('id', id).first().then(bill => {
        if (bill) {
            res.render('bills/edit', { bill: bill });
        } else {
            res.send("Cannot find the bills");
        }
    })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    knex('bills').where('id', id).first().update({
        billTotal: req.body.billTotal,
        taxPercent: req.body.taxPercent,
        tipPercent: req.body.tipPercent,
        groupSize: req.body.groupSize
    }).returning('*').then((bills) => {
        const newBill = bills[0];
        res.redirect(`/bills/${newBill.id}`);
    })
})


//DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    knex('bills').where('id', id).first().del().then(() => {
        res.redirect('/bills');
    })
})

module.exports = router;
