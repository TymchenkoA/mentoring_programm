'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport');

router.get('/login', (req, res) => {
    res.render('login', {message: req.flash('loginMessage')})
});

router.get('/signup', (req, res) => {
    res.render('signup', {message: req.flash('signupMessage')});
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;