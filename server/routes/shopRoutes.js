const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Shop = require('../models/Shop');

router.post('/register', async (req, res) => {
    const { username, shopName, description, address, postalCode } = req.body;
    try{
        const user = await User.findOne({ username });
        if(!user) {
            return res.status(404).json({ message: "To Register your shop please register yourself first."});
        }
        else if(user.role !== "vendor") {
            return res.status(403).json({ message: "You're not registered as vendore please update yourself as vendor."});
        }

        const vendorExist = await Shop.findOne({ owner: user._id });
        if(vendorExist) {
            return res.status(409).json({ message: "Shop already exists proceed to login."});
        }

        const newShop = new Shop({ shopName, description,owner:user._id, address, postalCode });
        await newShop.save();
        res.status(201).json({ message: "Shop registered successfully."});
    }
    catch(error) {
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
});

module.exports = router;