const Good = require('../models/Good.js');

const getGoodsByFamily = async (req, res) => {
    let goods;
    let family;

    if (req.baseUrl == '/drinks') {
        goods = await Good.find({ family: 'drink' });
        family = 'drinks';
    }
    if (req.baseUrl == '/food') {
        goods = await Good.find({ family: 'food' });
        family = 'food';
    }

    if (goods.length < 1) {
        return res.status(404).json({ mssg: `No ${family} there !` })
    }

    res.status(200).json(goods);
}

const getGoodsByType = async (req, res) => {
    let family = req.baseUrl.split('/')[1];

    const type = req.params.type
    const goods = await Good.find({ type });

    if (goods.length < 1) {
        return res.status(404).json({ mssg: `No ${family} of that type !` })
    }

    res.status(200).json(goods);
}

module.exports = {
    getGoodsByFamily,
    getGoodsByType
}