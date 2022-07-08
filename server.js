require('dotenv').config();
require('./config/database');

const cors = require('cors');
const express = require('express');

const Router = require('./routes/routes');
const passport = require('passport');


const app = express();
const PORT = process.env.PORT;

app.set('port', PORT);

app.get('/', (req,res) => {
    res.send('SERVER INITIALIZED');
});

//Middlewares
app.use(cors());
app.use(express.json());
app.use('/api', Router);
app.use(passport.initialize())

app.listen(PORT, () => {
    console.log('Server running on port: '+app.get('port'));
})