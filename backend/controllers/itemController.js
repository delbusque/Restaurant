const Item = require('../models/Item.js');

const getItemByFamily = async (req, res) => {
    let items;
    let family;

    if (req.baseUrl == '/drinks') {
        items = await Item.find({ family: 'drink' });
        family = 'drinks';
    }
    if (req.baseUrl == '/food') {
        items = await Item.find({ family: 'food' });
        family = 'food';
    }

    if (items.length < 1) {
        return res.status(404).json({ mssg: `No ${family} there !` })
    }

    res.status(200).json(items);
}

const getItemsByType = async (req, res) => {
    let family = req.baseUrl.split('/')[1];

    const type = req.params.type
    const items = await Item.find({ type });

    if (items.length < 1) {
        return res.status(404).json({ mssg: `No ${family} of that type !` })
    }

    res.status(200).json(items);
}

module.exports = {
    getItemByFamily,
    getItemsByType
}