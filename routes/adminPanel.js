const {
    Router
} = require('express');
const router = Router();

router.get('/', (request, response) => {
    response.render('index', {
        title: 'Главная страница',
        isIndex: true
    });
});

router.get('/contact', (request, response) => {
    response.render('contacts', {
        title: 'Контакты',
        isContacts: true
    });
});

module.exports = router;