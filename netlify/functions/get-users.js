const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

exports.handler = async () => {
  const users = await User.find();
  return {
    statusCode: 200,
    body: JSON.stringify(users),
  };
};
