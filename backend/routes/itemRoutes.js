const router = require('express').Router();

const {
    getItemByFamily,
    getItemsByType
} = require('../controllers/itemController.js');

router.get('/', getItemByFamily);
router.get('/:type', getItemsByType)

module.exports = router;