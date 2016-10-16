'use strict';

const express = require('express');
const router = express.Router();

router.get('/profile', function(req, res){
    res.json({response:"You sent me a GET request"});
});

router.post('/profile', function(req, res){
    res.json({response:"You sent me a POST request",
            body: req.body
    });
});

module.exports = router;

