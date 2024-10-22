const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  lineName: String,
  email: { type: String, unique: true },
  isPaid: Boolean,
  registeredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
