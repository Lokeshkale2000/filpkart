import products from "./constants/data.js"; // This should work now
import Product from './model/productSchema.js';


const DefaultData = async () => {
    try {
        // Loop through each product and check if it exists before inserting
        for (const product of products) {
            const existingProduct = await Product.findOne({ id: product.id });
            if (!existingProduct) {
                await Product.create(product); // Use create to insert a single product
            } else {
                console.log(`Product with id ${product.id} already exists. Skipping.`);
            }
        }
        console.log("Data imported successfully");
    } catch (error) {
        console.log('Error while inserting default data:', error.message);
    }
};

export default DefaultData;
