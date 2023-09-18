const ChefOrder = require('../models/ChefOrder.js');

const addOrders = async (req, res) => {

    const { name, quantity, quantityType, count, tableNum } = req.body;

    try {
        for (let i = 0; i < count; i++) {

            await ChefOrder.create({ name, count, quantity, quantityType, tableNum })
        }
        res.status(200).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getOrders = async (req, res) => {
    try {
        const waitingOrders = await ChefOrder.find({});
        res.status(200).json(waitingOrders)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    addOrders,
    getOrders
}