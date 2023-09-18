const router = require('express').Router();

const {
    addOrders,
    getOrders
} = require('../controllers/chefController.js');

router.post('/add-orders', addOrders);
router.get('/get-orders', getOrders);

module.exports = router;
