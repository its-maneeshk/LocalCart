const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, unique: true }, 
    email: { type: String, trim: true, lowercase: true, unique: true },
    password: { type: String, required: true, trim: true, min: 8 },
    role: { type: String, enum: ['customer', 'vendor', 'superadmin'], default: 'customer' }
},
{
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;