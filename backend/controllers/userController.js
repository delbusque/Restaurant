const User = require('../models/User')

const loginUser = async (req, res) => {

    res.status(200).json({ mssg: 'user login' })

}

const registerUser = async (req, res) => {
    res.status(200).json({ mssg: 'user register' })
}

module.exports = {
    loginUser,
    registerUser
}