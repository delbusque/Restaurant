const Item = require('../models/Item.js');
const mongoose = require('mongoose');

const getAllDrinks = async (req, res) => {
    let drinks = await Item.find({ family: 'drinks' });

    if (drinks.length < 1) {
        return res.status(404).json({ mssg: `No drinks there !` })
    }

    res.status(200).json(drinks);
}

const getAllFood = async (req, res) => {
    let food = await Item.find({ family: 'food' });

    if (food.length < 1) {
        return res.status(404).json({ mssg: `No food there !` })
    }

    res.status(200).json(food);
}

const getAllItems = async (req, res) => {
    let items = await Item.find({});

    if (items.length < 1) {
        return res.status(404).json({ mssg: `No items there !` })
    }

    res.status(200).json(items);
}

// const getItemByFamily = async (req, res) => {
//     let items;
//     let family;

//     if (req.baseUrl == '/drinks') {
//         items = await Item.find({ family: 'drink' });
//         family = 'drinks';
//     }
//     if (req.baseUrl == '/food') {
//         items = await Item.find({ family: 'food' });
//         family = 'food';
//     }

//     if (items.length < 1) {
//         return res.status(404).json({ mssg: `No ${family} there !` })
//     }

//     res.status(200).json(items);
// }

const getItemsByType = async (req, res) => {
    let family = req.baseUrl.split('/')[1];

    const type = req.params.type
    const items = await Item.find({ type });

    if (items.length < 1) {
        return res.status(404).json({ mssg: `No ${family} of that type !` })
    }

    res.status(200).json(items);
}

const addNewStockItem = async (req, res) => {
    const { name, family, type, price, quantity } = req.body;

    try {
        const newItiem = await Item.create({ name, family, type, price, quantity });
        res.status(200).json(newItiem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteStockItem = async (req, res) => {
    const { id } = req.params;
    console.log(id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such item in stock !' })
    }

    const item = await Item.findOneAndDelete({ _id: id })

    if (!item) {
        return res.status(400).json({ error: 'No such item in stock !' })
    }

    res.status(200).json(item);
}

module.exports = {
    getAllDrinks,
    getAllFood,
    getAllItems,
    getItemsByType,
    addNewStockItem,
    deleteStockItem
}