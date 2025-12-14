import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');

  } catch (error) {
    console.log('Error connecting to database...', error);
  }
};
