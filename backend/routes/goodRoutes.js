const router = require('express').Router();

const {
    getGoodsByFamily,
    getGoodsByType
} = require('../controllers/goodController.js');

router.get('/', getGoodsByFamily);
router.get('/:type', getGoodsByType)

module.exports = router;