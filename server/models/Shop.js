const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const shopSchema = new mongoose.Schema(
    {
        shopId: { type: String, default: () => nanoid(10), unique: true },
        shopName: { type: String, required: true },
        description: { type: String, default: 'no description given'},
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        address: { type: String, required: true },
        postalCode: { type: Number, required: true }
    },
    {
        timestamps: true
    }
);

const Shop = mongoose.model('Shop', shopSchema);
module.exports = Shop;