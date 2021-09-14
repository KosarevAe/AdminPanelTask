'use strict'
const express = require('express');
const exphbs = require('express-handlebars');
const siteRoutes = require('./routes/adminPanel');
const MongoClient = require("mongodb").MongoClient;

const PORT = process.env.PORT || 5050;
const url = 'mongodb+srv://mongodb:mongodb@cluster0.jab82.mongodb.net/AdminPanelDB?';
const mongoClient = new MongoClient(url);

const application = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

application.engine('hbs', hbs.engine);
application.set('view engine', 'hbs');
application.set('views', 'views');

application.use(siteRoutes);

async function start() {
    try {
        await mongoClient.connect();
        const dataBase = mongoClient.db('AdminPanelDB');
        const collection = dataBase.collection('Users');
        const count = await collection.countDocuments();

        console.log(count);

        application.listen(PORT, () => console.log('> Server is up and running on port : ' + PORT));
    } catch (error) {
        console.log(error);
    } finally {
        await mongoClient.close();
    }
}

start();