import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
//import { insertDefaultData } from './controller/product-controller.js';
import router from './routes/route.js';


dotenv.config(); 

await mongoose.connect(process.env.MONGODB_URI)

   console.log("mongodb conneted")


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', router);
      





 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

