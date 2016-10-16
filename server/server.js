'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
//const http = require('http').Server(app);
const session = require('express-session');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const morgan = require('morgan');

const config = require('./config');
//const bootstrapRoutes = require('./routes');
const configDB = require('./config/database.js');

mongoose.connect(configDB.url); // connect to our database

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // set up ejs for templating

app.use(logger('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(session({
    secret: config.session.secret,
    maxAge: 8640000000000
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(flash()); // use connect-flash for flash messages stored in session

require('./routes')(app);

app.use(express.static(config.ROOT));
// required for passport

// And run the server
app.listen(8080, function(){
    console.log('listening on port 8080');
});

module.exports = app;