const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    addToOrders
} = require('../controllers/chefController.js');

// router.use(authMiddleware);

router.post('/add-order', addToOrders);

module.exports = router;
