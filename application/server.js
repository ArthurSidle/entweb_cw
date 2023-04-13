const http = require('http');
const express = require('express');
const path = require('path');
const {MongoClient, ServerApiVersion} = require('mongodb');

const PORT_NUMBER = 8000;


const mongoURI = `mongodb://127.0.0.1:27017`;

const mongoClient = new MongoClient(mongoURI);

async function run() {
    try {
        await client.connect();

        await client.db('admin').command({ping: 1});
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } finally {
        await client.close();
    }
}
run().catch(console.dir);


const app = express();

app.use(express.static(path.join(__dirname, '/public/')));
app.set('view engine', 'pug');
app.set('views','views');

app.get('/', (req, res) => {
});

app.listen(PORT_NUMBER);
