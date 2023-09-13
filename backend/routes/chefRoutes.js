const router = require('express').Router();

const {
    addOrders,
    getWaitingOrders
} = require('../controllers/chefController.js');

router.post('/add-orders', addOrders);
router.get('/get-waiting-orders', getWaitingOrders);

module.exports = router;
