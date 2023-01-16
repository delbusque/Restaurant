require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to DB');
        app.listen(process.env.PORT, () => console.log(`Listening for request on port ${process.env.PORT}`));
    })
    .catch(err => console.log(err));
