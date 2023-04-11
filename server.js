const http = require('http');
const express = require('express');
const path = require('path');
//const bootstrap = require('bootstrap');

const PORT_NUMBER = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/public/')));
app.set('view engine', 'pug');
app.set('views','views');

app.get('/', (req, res) => {
});

app.listen(PORT_NUMBER);
