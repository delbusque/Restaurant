const Table = require('../models/Table.js');


const getTables = async (req, res) => {
    const tables = await Table.find({});
    res.status(200).json(tables);
}

const getSingleTable = async (req, res) => {
    const name = req.params.name
    const table = await Table.findOne({ name });

    if (!table) {
        res.status(404).json({ error: 'No such table' });
    }
    res.status(200).json(table);
}

const getOpenedTables = async (req, res) => {
    const openedTables = await Table.find({ opened: true });

    if (!openedTables) {
        res.json({ mssg: 'No opened tables' });
    }
    res.status(200).json(openedTables);
}


module.exports = {
    getTables,
    getSingleTable,
    getOpenedTables
}