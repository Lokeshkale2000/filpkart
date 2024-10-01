import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Box, Typography, Button, CircularProgress, CardMedia, Grid, Divider, Paper } from '@mui/material';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize navigate
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProduct = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:8080/product/${id}`);
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Product not found.');
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Error fetching product:', error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    const handleAddToCart = async () => {
        if (!product) return;
        try {
            const cartItem = {
                id: product.id, // Product ID
                price: product.price.cost,
                image: product.detailUrl || product.url || '/path/to/fallback-image.jpg',
                quantity: 1, // Default quantity
            };

            const response = await fetch('https://filpkart-qn9r.vercel.app/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartItem),
            });

            if (!response.ok) {
                throw new Error(`Error adding to cart: ${response.statusText}`);
            }

            // If the product is successfully added to the cart, navigate to the cart page
            console.log('Product added to cart:', cartItem);
            navigate('/cart'); // Redirect to the cart page

        } catch (error) {
            console.error('Error adding product to cart:', error.message);
        }
    };

    // Loading state
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress />
            </Box>
        );
    }

    // Error state
    if (error) {
        return (
            <Typography color="error" align="center" sx={{ mt: 4 }}>
                {error}
            </Typography>
        );
    }

    // No product found
    if (!product) {
        return (
            <Typography align="center" sx={{ mt: 4 }}>
                No product found.
            </Typography>
        );
    }

    return (
        <Box sx={{ maxWidth: 870, mx: 'auto', p: 3 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Grid container spacing={4}>
                    {/* Product Image and Buttons */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <CardMedia
                            component="img"
                            image={product?.detailUrl || product?.url || '/path/to/fallback-image.jpg'}
                            alt={product?.title?.longTitle || 'Product Image'}
                            sx={{ width: '100%', mb: 2 }}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="warning"
                                    fullWidth
                                    disabled={!product?.stock}
                                    sx={{ py: 1, mb: 1 }}
                                    onClick={handleAddToCart} // Call the function on button click
                                >
                                    Add to Cart
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="warning"
                                    fullWidth
                                    disabled={!product?.stock}
                                    sx={{ py: 1 }}
                                >
                                    Buy Now
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Product Details */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                            {product?.title?.longTitle || 'Product Title'}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" paragraph>
                            {product?.description || 'No description available.'}
                        </Typography>

                        <Divider sx={{ my: 2 }} />

                        <Grid container spacing={2}>
                            {/* Price */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">Price:</Typography>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    ₹{product?.price?.cost || 'N/A'}
                                </Typography>
                            </Grid>

                            {/* MRP */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">MRP:</Typography>
                                <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
                                    ₹{product?.price?.mrp || 'N/A'}
                                </Typography>
                            </Grid>

                            {/* Discount */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">Discount:</Typography>
                                <Typography variant="body2" color="green">{product?.discount || 'N/A'}</Typography>
                            </Grid>

                            {/* Rating */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">Rating:</Typography>
                                <Typography variant="body2">
                                    {product?.rating || 'No rating'} ⭐
                                </Typography>
                            </Grid>

                            {/* Stock */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">Stock:</Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    {product?.stock ? 'In Stock' : 'Out of Stock'}
                                </Typography>
                            </Grid>

                            {/* Category */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">Category:</Typography>
                                <Typography variant="body2">{product?.category || 'Unknown'}</Typography>
                            </Grid>

                            {/* Tagline */}
                            <Grid item xs={12}>
                                <Typography variant="body2" color="textPrimary">Tagline:</Typography>
                                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>{product?.tagline || 'N/A'}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default ProductDetail;
