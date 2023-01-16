const Drink = require('../models/Drink.js');

const getAllDrinks = async (req, res) => {
    const drinks = await Drink.find({});

    if (drinks.length < 1) {
        return res.status(404).json({ mssg: 'No drinks there !' })
    }

    res.status(200).json(drinks);
}

const getDrinksByType = async (req, res) => {
    const type = req.params.type
    const drinks = await Drink.find({ type });

    if (drinks.length < 1) {
        return res.status(404).json({ mssg: 'No drinks of that type !' })
    }

    res.status(200).json(drinks);
}

module.exports = {
    getAllDrinks,
    getDrinksByType
}