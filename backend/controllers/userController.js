const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '5d' });
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);
        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const editUser = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, phone } = req.body;


    const emptyFields = [];
    !firstName && emptyFields.push('firstName');
    !lastName && emptyFields.push('lastName');
    !phone && emptyFields.push('phone');

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'No such user to edit !' })
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'All fields should be filled !', emptyFields })
    }

    try {
        const updatedUser = await User.findbyIdAndUpdate(id, { firstName, lastName, phone }, { new: true });

        if (!updatedUser) {
            res.status(400).json({ error: 'No such User !' })
        }

        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }


}

module.exports = {
    loginUser,
    signupUser,
    getAllUsers,
    editUser
}