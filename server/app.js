// Import config
const keys = require('./keys');

// Express app setup
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Create express app
const app = express();

// Exposes methods for validating data in userController.
app.use(expressValidator());

// Expose raw requests on the req object
app.use(bodyParser.json());

// Passport for logins
app.use(passport.initialize());

// Point to routes laid our in index.js
app.use('/', routes);

// Export app for use in start.js
module.exports = app;
