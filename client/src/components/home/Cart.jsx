import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    CircularProgress,
    Grid,
    CardMedia,
    Button,
    Paper,
    styled,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

const Header = styled(Box)`
    padding: 15px 20px;
    background: ${(props) => props.theme.palette.background.default};
    border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: ${(props) => props.theme.palette.text.secondary};
`;

const Container = styled(Box)`
    padding: 20px 10px; /* Reduced side padding */
    background: ${(props) => props.theme.palette.background.default};
    margin: 80px;
    border-radius: 8px; /* Add border radius for better appearance */
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


const OrangeButton = styled(Button)`
    background-color: #EB5B00;
    padding:5px;
    color: white; /* Optional: Change text color for better contrast */
    &:hover {
        background-color: orange; /* Optional: Darker shade on hover */
    }
`;

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [price, setPrice] = useState(0);

    const fetchCartItems = async () => {
        try {
            const response = await fetch('https://filpkart-qn9r.vercel.app/cart');
            if (!response.ok) {
                throw new Error('Failed to fetch cart items.');
            }
            const data = await response.json();
            const groupedItems = data.reduce((acc, item) => {
                const existingItem = acc.find((i) => i.id === item.id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    acc.push({ ...item, quantity: 1 });
                }
                return acc;
            }, []);
            setCartItems(groupedItems);
        } catch (error) {
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
            cartItems.forEach((item) => {
                totalPrice += item.price * item.quantity;
            });
            setPrice(totalPrice);
        };
        totalAmount();
    }, [cartItems]);

    const handleDelete = async (itemId) => {
        try {
            await fetch(`https://filpkart-qn9r.vercel.app/cart/${itemId}`, { method: 'DELETE' });
            setCartItems((prevItems) =>
                prevItems.filter((item) => item._id !== itemId)
            );
        } catch (error) {
            console.error('Error deleting item:', error.message);
        }
    };

    const handleIncrease = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrease = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item._id === itemId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(Boolean)
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

    const deliveryCharges = 40; 
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={3} sx={{ p: 3 }}>
              
                <Grid item xs={10} md={6} sx={{ marginLeft: '120px' }}>
                    <Typography variant="h5" gutterBottom>
                        Your Cart
                    </Typography>
                    {cartItems.map((item) => (
                        <Paper elevation={3} sx={{ p: 2, mb: 2, borderRadius: 2, display: 'flex' }} key={item._id}>
                            {/* Image Section */}
                            <Box sx={{ width: '30%', pr: 2, marginLeft: '100px' }}>
                                <CardMedia
                                    component="img"
                                    image={item.image || '/path/to/fallback-image.jpg'}
                                    alt={item.title || 'Product image'}
                                    sx={{ height: '160px', width: "220px", objectFit: 'contain', }}
                                />
                            </Box>

                         
                            <Box sx={{ width: '40%', display: 'flex', flexDirection: 'column', marginTop:'20px'}}>
                                <Box>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {item.title || 'Product Name'}
                                    </Typography>
                                    <Typography variant="body2" color="black" fontWeight={300}>
                                        Price: ₹{item.price * item.quantity}
                                    </Typography>
                                </Box>

                              
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '150px', mt: 1, mb: 1 }}>
                                    <Button variant="outlined" color="primary" onClick={() => handleDecrease(item._id)} disabled={item.quantity <= 1}>
                                        -
                                    </Button>
                                    <Typography variant="body2" sx={{ mx: 2 }}>{item.quantity}</Typography>
                                    <Button variant="outlined" color="primary" onClick={() => handleIncrease(item._id)}>
                                        +
                                    </Button>
                                </Box>

                               
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: "20px",color:"red" }}>
                                    <OrangeButton
                                        variant="outlined"
                                        size="small"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </OrangeButton>
                                    <Box sx={{ width: '100px', display: 'flex', justifyContent: 'left' }}>
                                        <OrangeButton
                                            variant="contained"
                                            onClick={() => console.log('Buy now clicked')}
                                        >
                                            Buy Now
                                        </OrangeButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    ))}
                </Grid>

                <Grid item xs={12} md={4} sx={{ flex: 1.15,marginTop:'55px' }}> 
                    <Header>
                        <Heading sx={{color:"black",fontSize:"200",alignContent:"center"}}>PRICE DETAILS</Heading>
                    </Header>
                    <Container>
                        <Typography>
                            Price ({cartItems.length} items)
                            <Price component="span">₹{price}</Price>
                        </Typography>
                        <Typography>
                            Delivery Charges
                            <Price component="span">₹{deliveryCharges}</Price>
                        </Typography>
                        <TotalAmount>
                            Total Amount
                            <Price component="span">₹{price + deliveryCharges}</Price>
                        </TotalAmount>
                        <OrangeButton variant="contained" fullWidth>
                            Proceed to Checkout
                        </OrangeButton>
                    </Container>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Cart;
