import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Grid, CardMedia, Button, Paper, styled } from '@mui/material';

// Styled components for Price Details
const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 20px 15px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`;

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    const fetchCartItems = async () => {
        try {
            const response = await fetch('http://localhost:8080/cart');
            if (!response.ok) {
                throw new Error('Failed to fetch cart items.');
            }
            const data = await response.json();
            const groupedItems = data.reduce((acc, item) => {
                const existingItem = acc.find(i => i.id === item.id);
                if (existingItem) {
                    existingItem.quantity += 1; // Increase quantity if the item exists
                } else {
                    acc.push({ ...item, quantity: 1 }); // Initialize quantity to 1 for new items
                }
                return acc;
            }, []);

            setCartItems(groupedItems);
        } catch (error) {
            console.error('Error fetching cart items:', error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    useEffect(() => {
        const totalAmount = () => {
            let totalPrice = 0;
            let totalDiscount = 0;

            cartItems.forEach(item => {
                totalPrice += item.price * item.quantity; // Calculate total price considering quantity
                totalDiscount += (item.price - item.price.cost) * item.quantity; // Calculate total discount
            });

            setPrice(totalPrice);
            setDiscount(totalDiscount);
        };

        totalAmount(); // Call the local function
    }, [cartItems]);

    const handleDelete = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:8080/cart/${itemId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete item.');
            }
            // Update cart state by decreasing the quantity
            setCartItems((prevItems) => {
                const updatedItems = prevItems.map(item => {
                    if (item._id === itemId) {
                        if (item.quantity > 1) {
                            return { ...item, quantity: item.quantity - 1 }; // Decrease quantity by 1
                        } else {
                            return null; // Remove item if quantity is 1
                        }
                    }
                    return item;
                }).filter(Boolean); // Filter out null items

                return updatedItems;
            });
            // Fetch the updated cart items after deleting
            fetchCartItems();
        } catch (error) {
            console.error('Error deleting item:', error.message);
        }
    };

    const handleIncrease = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item._id === itemId
                    ? { ...item, quantity: item.quantity + 1 } // Increase quantity by 1
                    : item
            )
        );
    };

    const handleDecrease = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map(item => {
                if (item._id === itemId) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 }; // Decrease quantity by 1
                    } else {
                        return null; // Remove item if quantity is 1
                    }
                }
                return item;
            }).filter(Boolean) // Filter out null items
        );
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress />
                <Typography sx={{ mt: 2 }}>Loading your cart items...</Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Typography color="error" align="center" sx={{ mt: 4 }}>
                {error}
            </Typography>
        );
    }

    if (cartItems.length === 0) {
        return (
            <Typography align="center" sx={{ mt: 4 }}>
                No items in the cart.
            </Typography>
        );
    }

    return (
        <Box sx={{ Width: 500, height:150, p: 3,  contain:fi}}>
            <Typography variant="h5" gutterBottom>
                Your Cart
            </Typography>
            <Grid container spacing={3}>
                {cartItems.map((item) => (
                    <Grid item xs={12} key={item._id}>
                        <Paper elevation={3} sx={{ p: 2, borderRadius: 2, height: '250px', display: 'flex' }}>
                            {/* Left side: Image (70% width) */}
                            <Box sx={{ width: '70%', pr: 2 }}>
                                <CardMedia
                                    component="img"
                                    image={item.image || '/path/to/fallback-image.jpg'}
                                    alt={item.title || 'Product image'}
                                    sx={{ height: '100%', objectFit: 'contain' }}
                                />
                            </Box>

                            {/* Right side: Product details (30% width) */}
                            <Box sx={{ width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {item.title || 'Product Name'}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                                        Price: ₹{item.price * item.quantity}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                                        Quantity: {item.quantity}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleDecrease(item._id)}
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleIncrease(item._id)}
                                    >
                                        +
                                    </Button>
                                </Box>
                                <Box>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ mt: 2 }}
                                    >
                                        Checkout
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        fullWidth
                                        sx={{ mt: 1 }}
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Price Details Section */}
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>
                    Price ({cartItems.length} items)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>
                    Discount
                    <Price component="span">-₹{discount}</Price>
                </Typography>
                <Typography>
                    Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <TotalAmount>
                    Total Amount
                    <Price>₹{price - discount + 40}</Price>
                </TotalAmount>
                <Discount>
                    You will save ₹{discount} on this order
                </Discount>
            </Container>
        </Box>
    );
};

export default Cart;
