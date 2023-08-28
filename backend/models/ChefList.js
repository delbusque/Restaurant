const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chefListSchema = new Schema({
    orders: [{
        type: mongoose.Types.ObjectId,
        ref: 'Item'
    }],
    ready: [{
        type: mongoose.Types.ObjectId,
        ref: 'Item'
    }]
})

module.exports = mongoose.model('ChefList', chefListSchema)