// // middleware/middleware.js
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    try {
        const token = req.header('x-token');
        if (!token) {
            return res.status(400).send('Token Not Found');
        }
        
        const decoded = jwt.verify(token, 'jwtSecret'); // Use hardcoded secret here
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
}