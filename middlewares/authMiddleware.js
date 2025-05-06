// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // adjust path if needed

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password'); // Attach user to request
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};
