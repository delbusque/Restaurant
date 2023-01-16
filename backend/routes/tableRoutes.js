const express = require('express');

const {
    getAllTables,
    getSingleTable,
    getOpenedTables
} = require('../controllers/tableController.js')

const router = express.Router();

router.get('/', getAllTables);
router.get('/opened', getOpenedTables);
router.get('/:name', getSingleTable);


module.exports = router;