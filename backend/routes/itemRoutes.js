const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    getAllItems,
    addNewStockItem,
    deleteStockItem
} = require('../controllers/itemController.js');

router.get('/', getAllItems);

router.use(authMiddleware);

router.post('/add', addNewStockItem);
router.delete('/:id', deleteStockItem);

module.exports = router;