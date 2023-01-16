const Table = require('../models/Table.js');

const getAllTables = async (req, res) => {
    const tables = await Table.find({});
    res.status(200).json(tables);
}

const getSingleTable = async (req, res) => {
    const name = req.params.name
    const table = await Table.findOne({ name });

    if (!table) {
        return res.status(404).json({ error: 'No such table' });
    }
    res.status(200).json(table);
}

const getOpenedTables = async (req, res) => {
    const openedTables = await Table.find({ opened: true });
    console.log(openedTables.length);

    if (openedTables.length < 1) {
        return res.json({ mssg: 'No opened tables' });
    }
    res.status(200).json(openedTables);
}


module.exports = {
    getAllTables,
    getSingleTable,
    getOpenedTables
}