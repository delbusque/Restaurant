const router = require('express').Router();

const {
    getAllItems,
    addNewStockItem,
    deleteStockItem,
    editStockItem
} = require('../controllers/itemController.js');

router.get('/', getAllItems);
// router.get('/drinks', getAllDrinks);
// router.get('/food', getAllFood);

router.post('/add', addNewStockItem);
router.delete('/:id', deleteStockItem);
router.patch('/:id', editStockItem)

// router.get('/', getItemByFamily);
// router.get('/', getItemByFamily);



// router.get('/:type', getItemsByType)

module.exports = router;