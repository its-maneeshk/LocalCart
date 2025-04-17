const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: "Unauthorized: JWT token required" });
    }

    const token = authHeader.split(' ')[1]; // Extract token after 'Bearer '

    try {
        const decodedData = jwt.verify(token, process.env.SECRET); // ✅ Fix spelling
        req.user = decodedData; // ✅ Use lowercase 'user'
        next();
    } catch (error) {
        return res.status(403).json({ message: "Unauthorized: JWT token expired or invalid" });
    }
};

module.exports = { ensureAuthenticated };