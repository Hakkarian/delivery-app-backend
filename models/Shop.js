const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Shop = mongoose.model('shops', shopSchema);

module.exports = Shop;