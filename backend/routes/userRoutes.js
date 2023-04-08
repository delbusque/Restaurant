const express = require('express');
const {
    loginUser,
    signupUser,
    getAllUsers
} = require('../controllers/userController.js')

const router = express.Router();

router.post('/login', loginUser)
router.post('/signup', signupUser)
router.get('/', getAllUsers)

module.exports = router;