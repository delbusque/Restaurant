const User = require('../models/User')

const loginUser = async (req, res) => {

    res.status(200).json({ mssg: 'user login' })

}

const signupUser = async (req, res) => {
    res.status(200).json({ mssg: 'user signupUser' })
}

module.exports = {
    loginUser,
    signupUser
}