const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chefOrderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    table: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    ingredients: {
        type: Array,
    },
}, { timestamps: true })

module.exports = mongoose.model('ChefOrder', chefOrderSchema)