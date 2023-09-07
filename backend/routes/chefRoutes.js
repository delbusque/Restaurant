const router = require('express').Router();

const {
    addOrders
} = require('../controllers/chefController.js');

router.post('/add-orders', addOrders);

module.exports = router;
