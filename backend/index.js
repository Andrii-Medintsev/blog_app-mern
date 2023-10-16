const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');

//database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('database is connected successfully!');
  } catch (error) {
    console.log(error);
  }
};

//middlewares
dotenv.config();
app.use(express.json());
app.use('/api/auth', authRouter);

app.listen(8000, () => {
  console.log('app is running on port 8000');
  connectDB();
});
