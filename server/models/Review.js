const mongoose = require('mongoose');

const customerReview= new mongoose.Schema(
    {
        username: { type: String, required: true},
        comment: { type: String, default: "comment not found" },
        rating: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
        customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop'}
    },
    {
        timestamps: true
    }
);

const Review = mongoose.model('Review', customerReview);
module.exports = Review;