const router = require('express').Router();

const {
    addOrders,
    getOrders,
    updateWaitingStatus
} = require('../controllers/chefController.js');

router.post('/add-orders', addOrders);
router.get('/get-orders', getOrders);
router.post('/update-waiting-status', updateWaitingStatus);

module.exports = router;
