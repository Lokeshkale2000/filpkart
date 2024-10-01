import products from "../constants/data.js"; 
import Product from '../model/productSchema.js';



export const insertDefaultData = async (req, res) => {
    try {
        const existingProducts = await Product.find({ id: { $in: products.map(product => product.id) } });
    
        const existingProductIds = existingProducts.map(product => product.id);
        const newProducts = products.filter(product => !existingProductIds.includes(product.id));
       
        if (newProducts.length > 0) {
            await Product.insertMany(newProducts);
           
        }
        
       res.status(201).json({ message: "Default data inserted successfully" });
    } catch (error) {
        res.status(500).json({ message: 'Error while inserting default data', error: error.message });
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


  