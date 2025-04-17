const express = require('express');
const { ensureAuthenticated } = require('../middleware/auth');
const router = express.Router();


router.get('/', ensureAuthenticated, (req, res) => {
    console.log("--------------logged in user details --------------", req.user);
    res.status(200).json([
        {
            name: "Iphone 11",
            price: 320
        },
        {
            name: "Iphone 16",
            price: 700
        },
        {
            name: "Iphone X",
            price: 890
        }
    ])
});

module.exports = router;