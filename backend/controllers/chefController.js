const mongoose = require('mongoose');
const ChefOrder = require('../models/ChefOrder.js');

const addOrders = async (req, res) => {

    const { name, quantity, count, table } = req.body;

    try {

        for (let i = 0; i < count; i++) {

            await ChefOrder.create({ name, count, quantity, table })
        }

        res.status(200).json();

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    addOrders
}