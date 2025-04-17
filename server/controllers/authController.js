const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Update path as needed

const signup = async (req, res) => {
    const { name, username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            if (existingUser.username === username) {
                return res.status(409).json({ message: 'Username already exists', success: false });
            }
            if (existingUser.email === email) {
                return res.status(409).json({ message: 'Email already exists', success: false });
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, username, email, password: hashedPassword });

        await newUser.save();

        res.status(201).json({ message: "Signup successful", success: true });
    } catch (error) {
        res.status(500).json({ message: `Internal server error: ${error.message}`, success: false });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const errorMessage = "Auth failed email or password did not matched.";
    try{
        const user = await User.findOne({ email });
        if (!user ) {
            return res.status(403).json({ message: "User does not exist", success: false });
        }
        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if(!isPasswordEqual) {
            return res.status(403).json({ message: errorMessage, success: false }); 
        }
        const jwtToken = jwt.sign({email: user.email, _id: user._id}, process.env.SECRET, { expiresIn: '24h' });
        res.status(200).json({ message: 'Login Successful', success: true, jwtToken, email, name: user.name });
    }
    catch(error) {
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
};


module.exports = { signup, login }; 
