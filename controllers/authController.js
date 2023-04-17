const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.signup = async function(req, res) {
  const { email, password, role } = req.body;
  const user = new User({ email, password, role });
  try {
    await user.save();
    res.status(201).json({ message: 'User created successfully.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async function(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) { throw new Error('Invalid credentials.'); }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) { throw new Error('Invalid credentials.'); }
    const token = jwt.sign({ email: user.email, role: user.role }, 'secret');
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
