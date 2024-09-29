// server.js
import express from 'express'; // Use import instead of require
import cors from 'cors'; // Use import instead of require
import { connectDB } from './database/db.js'; // Adjust the path if necessary

import DefaultData from './default.js'; // Adjust the path and use .js extension
import dotenv from 'dotenv'; 
import Router from './routes/route.js';// Use import instead of require

dotenv.config(); // Initialize dotenv

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/',Router);
// Connect to MongoDB
connectDB().then(() => {
    // After successful connection, you can call DefaultData
    DefaultData(); // Call your function to insert default data if necessary
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
