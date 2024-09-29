// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Import dotenv

dotenv.config(); // Load environment variables

// MongoDB connection function
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process with failure
    }
};
