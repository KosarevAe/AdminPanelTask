'use strict';

const { Router } = require('express');
const MainRouter = Router();

MainRouter.get('/', (request, response) => {
    response.render('index', {
        title: 'Главная страница',
        isIndex: true
    });
});


module.exports = { MainRouter };