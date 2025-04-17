const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    const { name, username, email, phone, password, role } = req.body;
    try {
        const user = await User.findOne({ $or: [{username},{email},{phone}] });
        if(user){
            if(user.username === username) {
                return res.status(409).json({ message: 'Username already exists' });
            }
            if(user.email === email) {
                return res.status(409).json({ message: 'Email already exists' });
            }
            if(user.phone === phone) {
                return res.status(409).json({ message: 'Phone Number already exists' });
            }
        }
        const newUser = new User({ name, username, email, phone, password, role });
        await newUser.save();
        res.status(201).json({ message: "YAY!! new user registered successfully! "});
    }
    catch(error) {
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try{
        const user = await User.findOne({ username });
        if (!user || user.password !== password ) {
            return res.status(401).json({ message: 'Invalid Credential' });
        }
        res.status(200).json({ message: 'Login Successful' });
    }
    catch(error) {
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
});

router.patch("/forget", async (req, res) => {
    const { username, email, phone, password } = req.body;
    try{
        const user = await User.findOne({ $and: [{username}, {email}, {phone}]});
        if(user) {
            return res.status(404).json({ message: "Recovery credential didnot matched. Please recheck username, email & phone!!"});
        }
        user.password = password;
        await user.save();
        res.status(200).json({ message: "Congratulation🎉 Password changed successfullly"});
    }
    catch(error) {
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
});

module.exports = router;