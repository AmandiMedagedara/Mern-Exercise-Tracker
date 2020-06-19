const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemPhoto: { 
        type: Buffer,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    deliveryMethod: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;