const Message = require('../models/Message.js');
const mongoose = require('mongoose');

const getMessages = async (req, res) => {
    let messages = await Message.find({});

    if (messages.length < 1) {
        return res.status(404).json({ mssg: `No messages there !` })
    }

    res.status(200).json(messages);
}

const addMessage = async (req, res) => {
    const { authorId, content } = req.body;

    try {
        const message = await Message.create({ authorId, content });
        res.status(200).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = {
    getMessages,
    addMessage
}