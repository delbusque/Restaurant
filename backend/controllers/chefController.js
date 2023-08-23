const mongoose = require('mongoose');
const ChefList = require('../models/ChefList.js');

const addToOrders = async (req, res) => {

    const { _id } = req.body;

    try {
        await ChefList.findOneAndUpdate(

            { $push: { orders: { 'id': _id } } });

        res.status(200).json(_id);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    addToOrders
}