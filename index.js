'use strict'
const express = require('express');
const exphbs = require('express-handlebars');
const {
    MongoClient
} = require('mongodb');

const PORT = process.env.PORT || 5050;
const application = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

application.engine('hbs', hbs.engine);
application.set('view engine', 'hbs');
application.set('views', 'views');

async function main() {
    const uri = "mongodb+srv://mongodb:<mongodb>@cluster0.jab82.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}
main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};