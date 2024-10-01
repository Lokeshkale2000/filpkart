import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import { insertDefaultData } from './controller/product-controller.js';
import router from './routes/route.js';


dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', router);
      




mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    try {
      insertDefaultData();
    } catch (error) {
      console.error("Error inserting default data:", error.message);
    }
  })
  .catch(err => console.error("Error connecting to MongoDB:", err));




 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

