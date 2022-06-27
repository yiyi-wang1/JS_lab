const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Your are login as: ${res.locals.user}`);
})
module.exports = router;