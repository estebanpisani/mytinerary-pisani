require('dotenv').config();
require('./config/database');

const express = require('express');
const app = express();

const PORT = 4000;

app.set('port', PORT);

app.get('/', (req,res) => {
    res.send('SERVER INITIALIZED');
})

app.listen(PORT, () => {
    console.log('Server running on port: '+app.get('port'));
})