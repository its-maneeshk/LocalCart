const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected successfully: ${conn.connection.host}`);
    }
    catch(error) {
        console.log(`Database connectivity failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;