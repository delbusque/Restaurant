const router = require('express').Router();

const {
    // getItemByFamily,
    // getAllDrinks,
    // getAllFood,
    getAllItems,
    // getItemsByType,
    addNewStockItem,
    deleteStockItem
} = require('../controllers/itemController.js');

router.get('/', getAllItems);
// router.get('/drinks', getAllDrinks);
// router.get('/food', getAllFood);

router.post('/add', addNewStockItem)
router.delete('/:id', deleteStockItem)

// router.get('/', getItemByFamily);
// router.get('/', getItemByFamily);



// router.get('/:type', getItemsByType)

module.exports = router;