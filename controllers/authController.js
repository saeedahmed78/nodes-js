const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/config');

exports.login = async (req, res, next) => {
  try {
    await passport.authenticate('local', { session: false })(req, res, next);

    const user = req.user;
    
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const token = jwt.sign({ userId: user._id }, config.secretKey, { expiresIn: '30s' });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Authentication failed' });
  }
};

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already taken using async/await
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user (ideally with password hashing)
    const newUser = new User({ username, password });
    await newUser.save();

    // Automatically log in the new user
    const token = jwt.sign({ userId: newUser._id }, config.secretKey, { expiresIn: '30s' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
