'use strict'

const express = require('express')

const router = new express.Router();

//endpoint 
router.get('/', (req, res, next) => {
    res.status(200).send({
        "nome" :"RM 85367 Anna Luiza Morais Roman"
    });
});

module.exports = router;