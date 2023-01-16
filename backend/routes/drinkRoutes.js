const router = require('express').Router();

const {
    getAllDrinks,
    getDrinksByType
} = require('../controllers/drinkController.js');

router.get('/', getAllDrinks);
router.get('/:type', getDrinksByType)

module.exports = router;