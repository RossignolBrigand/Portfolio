const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

//----------------
//Environment config
dotenv.config();
const envFile = `.env.${process.env.NODE_ENV || ''}`
dotenv.config({ path: envFile });
console.log(`Running in ${process.env.NODE_ENV || ''} mode`);

//---------------------------------
//Routes



//---------------------------------

// Connect to MongoDB Database 

mongoose.connect(`${process.env.DB_SECRET_KEY}`)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//------------------------------------------------------------

// Lets us get requests which contain a json object and store them within a req.body param
app.use(express.json());

// Create a header for all requests and responses for our paths to help prevent CORS issues
app.use(cors());

//---------------------------------------------

//---------------------------------------------

module.exports = app;