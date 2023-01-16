const express = require('express');

const {
    getTables,
    getSingleTable,
    getOpenedTables
} = require('../controllers/tableController.js')

const router = express.Router();

router.get('/', getTables);
router.get('/opened', getOpenedTables);
router.get('/:name', getSingleTable);


module.exports = router;