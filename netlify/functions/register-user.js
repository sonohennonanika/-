const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

exports.handler = async (event) => {
  const { name, lineName, email } = JSON.parse(event.body);

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: '既に登録されています' }),
    };
  }

  const newUser = new User({ name, lineName, email, isPaid: false });
  await newUser.save();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: '登録が完了しました' }),
  };
};
