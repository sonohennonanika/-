const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

exports.handler = async (event) => {
  const { userId } = JSON.parse(event.body);
  await User.findByIdAndDelete(userId);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: '削除しました' }),
  };
};
