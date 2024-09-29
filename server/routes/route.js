import express from 'express';
import userSignup from '../controller/user-controller.js'; 
import  userLogIn from '../controller/user-controller.js'; 
import { getProducts, createDefaultProducts } from '../controller/product-controller.js';



//import  getProductById from '../controller/product-controller.js';


const router = express.Router();


router.post('/signup', userSignup);
router.post('/login', userLogIn);
// GET route to retrieve all products
router.get('/products', getProducts);
router.post('/products/default', createDefaultProducts);



export default router;
