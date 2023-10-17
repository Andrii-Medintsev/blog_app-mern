const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const commentRouter = require('./routes/comments');

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
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentRouter);

app.get('/', (req, res) => {
  res.send('app is running on port 3000');
})

app.listen(3000, () => {
  console.log('app is running on port 3000');
  connectDB();
});
