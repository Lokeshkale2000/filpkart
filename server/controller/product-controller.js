import Product from '../model/productSchema.js';
import  products  from '../constants/data.js'; // Import your default products

// Function to get all products
export const getProducts = async (request, response) => {
    try {
        const allProducts = await Product.find();
        response.status(200).json(allProducts);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

// Function to insert default products
export const createDefaultProducts = async (request, response) => {
    try {
        await Product.deleteMany({}); // Optional: Clear existing data
        await Product.insertMany(products); 
        console,log(Product)// Insert default products
        response.status(201).json({ message: 'Default products inserted successfully' });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};
