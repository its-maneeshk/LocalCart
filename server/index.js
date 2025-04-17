const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const databaseConnection = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const shopRoutes = require('./routes/shopRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const authRouter = require('./routes/authRoutes');
const prodRouter = require('./routes/prodRoutes');

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 8081;

databaseConnection();

app.use(cors());

app.use("/user",userRoutes);
app.use("/shop", shopRoutes);
app.use("/user",reviewRoutes);

app.use("/auth", authRouter);
app.use("/products", prodRouter);

app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
});