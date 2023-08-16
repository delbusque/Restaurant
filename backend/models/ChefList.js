const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chefListSchema = new Schema({
    orders: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    ready: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
})

model.exports = mongoose.model('ChefList', chefListSchema)