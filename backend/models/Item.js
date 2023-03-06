const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    family: {
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
        default: function () {
            if (this.family === 'drinks') {
                return 'ml';
            } else if (this.family === 'food') {
                return 'gr';
            }
        }
    }
});

module.exports = mongoose.model('Item', itemSchema);