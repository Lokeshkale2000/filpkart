import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: { type: String, required: true },  
    url: { type: String, required: true },
    detailUrl: { type: String, required: true },
    title: {
        shortTitle: { type: String, required: true },
        longTitle: { type: String, required: true }
    },
    price: {
        mrp: { type: Number, required: true },
        cost: { type: Number, required: true },
        discount: { type: String, required: true }
    },
    quantity: { type: Number, default: 1 },
    description: { type: String, required: true },
    discount: { type: String, required: true },
    tagline: { type: String, required: true },
    rating: { type: Number, required: true },
    stock: { type: Boolean, required: true },
    category: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
