const router = require('express').Router();

const {
    // getItemByFamily,
    getAllDrinks,
    getAllFood,
    getAllItems,
    getItemsByType
} = require('../controllers/itemController.js');

router.get('/', getAllItems);
router.get('/drinks', getAllDrinks);
router.get('/food', getAllFood);

// router.get('/', getItemByFamily);
// router.get('/', getItemByFamily);



router.get('/:type', getItemsByType)

module.exports = router;