const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Shop = require('../models/Shop');
const Review = require('../models/Review');

router.post('/review', async (req, res) => {
    const { username,shopId, comment, rating  } = req.body;
    try{
        const user = await User.findOne({ username });
        if(user) {
            const isUserAlreadyCommented = await Review.findOne({ username });
            if(isUserAlreadyCommented) {
                return res.status(404).json({ message: "Cannot comment multiple times but you can update your comment."});
            }
            // CHECK IF USER IS CUSTOMER OR NOT 
            if(user.role !== 'customer') {
                return res.status(409).json({ message: "Only customers can comment."});
            }
            // CHECK IF SHOP EXIST BEFORE ADDING COMMENT
            const shop = await Shop.findOne({ shopId });
            if(!shop) {
                return res.status(404).json({ message: `Shop doesnot exist with ID: ${shopId}`});
            }
            // ADDING COMMENT
            const newReview = new Review({ username, comment, rating, customer:user._id, vendor:shop._id });
            await newReview.save();
            res.status(201).json({ message: "Review added successfully."})
        }
        else{
            return res.status(404).json({ message: "User does't exist. Proceed to register yourself."})
        }
    }
    catch(error) {
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
});

module.exports = router;