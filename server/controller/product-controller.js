import products from "../constants/data.js"; 
import Product from '../model/productSchema.js';



export const insertDefaultData = async () => {
    try {
     
      const existingProducts = await Product.find();
      
      if (existingProducts.length === 0) {
        await Product.insertMany(productData);
        console.log('Default data inserted successfully');
      } else {
        console.log('Data already exists');
      }
    } catch (error) {
      console.error('Error while inserting default data:', error.message);
      throw error; 
    }
  };

export const getAllProducts = async (req, res) => {
    console.log("this api het",)
    try {
        const allProducts = await Product.find();
        
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};


export const getProductById = async (req, res) => {
    const { id } = req.params; 
    console.log("Product ID from request:", id);
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
};


  