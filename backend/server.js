require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const tableRoutes = require('./routes/tableRoutes.js');
const itemRoutes = require('./routes/itemRoutes.js');
const userRoutes = require('./routes/userRoutes.js')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(404).json({ mssg: 'No such API endpoint' })
})

app.use('/tables', tableRoutes);

app.use('/items', itemRoutes);

app.use('/user', userRoutes);
app.use('/staff', userRoutes);

// app.use('/drinks', itemRoutes);
// app.use('/food', itemRoutes);

app.use('*', (req, res) => {
    res.status(404).json({ mssg: 'No such API endpoint' })
})


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to DB');
        app.listen(process.env.PORT, () => console.log(`Listening for request on port ${process.env.PORT}`));
    })
    .catch(err => console.log(err));
