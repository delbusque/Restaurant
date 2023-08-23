const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chefListSchema = new Schema({
    orders: [],
    // ready: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
})

module.exports = mongoose.model('ChefList', chefListSchema)