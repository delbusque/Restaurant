require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const tableRoutes = require('./routes/tableRoutes.js');

const app = express();

app.use(express.json());

app.use('/tables', tableRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to DB');
        app.listen(process.env.PORT, () => console.log(`Listening for request on port ${process.env.PORT}`));
    })
    .catch(err => console.log(err));
