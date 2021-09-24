'use strict';

const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

const exphbs = require('express-handlebars');
const express = require('express');
const server = express();

const { MainRouter } = require('./src/routes/adminPanel');

(function runSetup() {
    const hbs = exphbs.create({
        defaultLayout: 'main',
        extname: 'hbs',
    });

    server.engine('hbs', hbs.engine);
    server.set('view engine', 'hbs');
    server.set('views', path.join(__dirname, '../views'));

    server.use(mainRouter);
})();