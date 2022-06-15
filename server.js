require('dotenv').config();
require('./config/database');

const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 4000;
const Router = require('./routes/routes');

app.set('port', PORT);

app.get('/', (req,res) => {
    res.send('SERVER INITIALIZED');
});

//Middlewares
app.use(cors());
//Definimos formato de las requests y responses
app.use(express.json());
//Las rutas definidas van a ser consecutivas a '/api'
//Por ej: (...).com/api/cities
app.use('/api', Router);

app.listen(PORT, () => {
    console.log('Server running on port: '+app.get('port'));
})