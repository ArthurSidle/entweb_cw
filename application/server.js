const http = require('http');
const express = require('express');
const path = require('path');
const {MongoClient, ServerApiVersion} = require('mongodb');

const PORT_NUMBER = 8000;


const mongoURI = `mongodb://127.0.0.1:27017`;

const mongoClient = new MongoClient(mongoURI);

async function run() {
    try {
        await mongoClient.connect();

        await mongoClient.db('admin').command({ping: 1});
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.dir);


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '/public/')));
app.set('view engine', 'pug');
app.set('views','views');

app.post('/getQuote', (req, res) => {
    let manHours = req.query.manHours;
    let hourlyPay = req.query.hourlyPay;
    let fudgeFactor = Math.random() + 0.5;

    let personCost = parseFloat(manHours) * parseFloat(hourlyPay) * fudgeFactor;
    Console.log(manHours + " " + hourlyPay);
    res.send(personCost);
});

app.listen(PORT_NUMBER, () => {
    console.log(`Node server running on port ${PORT_NUMBER}`);
});
