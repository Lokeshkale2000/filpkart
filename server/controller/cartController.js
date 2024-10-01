import Cart from '../model/cartSchema.js'; 

export const addToCart = async (req, res) => {
    console.log("Request Body:", req.body);
    const { id, image, price, quantity } = req.body; 

    try {
        const cartItem = new Cart({ id, image, price, quantity });
        await cartItem.save();
        res.status(201).json({ message: 'Item added to cart', cartItem });
    } catch (error) {
        console.error('Error adding item to cart:', error.message);
        res.status(500).json({ error: 'Failed to add item to cart' });
    }
};

export const getCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.find();
        res.status(200).json(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error.message);
        res.status(500).json({ error: 'Failed to fetch cart items' });
    }
};
 
 export const deleteCartItem = async (req, res) => {
     const { id } = req.params; // Get the product id from the request parameters
 
     try {
         // Find the cart item by its _id
         const deletedItem = await Cart.findByIdAndDelete(id);
 
         if (!deletedItem) {
             return res.status(404).json({ message: 'Item not found' });
         }
 
         return res.status(200).json({ message: 'Item deleted successfully', deletedItem });
     } catch (error) {
         console.error('Error deleting item:', error.message);
         res.status(500).json({ message: 'Error deleting item', error });
     }
 };
 