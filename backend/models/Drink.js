const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    quantityType: {
        type: String,
        default: 'ml'
    }
});

module.exports = mongoose.model('Drink', drinkSchema);