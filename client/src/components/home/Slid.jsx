import React, { useState, useEffect } from 'react';
import { Box, Typography, styled, Button, Divider } from '@mui/material';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';

// Styled components
const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
    padding: 16px;
`;

const Deal = styled(Box)`
    display: flex;
    padding: 15px 20px;
`;

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`;

const StyledCard = styled(Box)`
    text-align: center;
    padding: 25px 15px;
    cursor: pointer;
    gap: 30px;
`;

const Image = styled('img')({
    width: 'auto',
    height: 150
});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
`;

const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
`;

// Carousel responsive settings
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Slide = () => {
    const [products, setProducts] = useState([]);  // State to store fetched products
    const [error, setError] = useState(null);      // State to handle errors
    const navigate = useNavigate();

    // Fetch product data from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://filpkart-qn9r.vercel.app/products');  // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to load products. Please try again later.');
            }
        };

        fetchProducts();
    }, []);

    // Handle product card click to navigate to product detail
    const handleCardClick = (id) => {
        navigate(`/product/${id}`);
    };

    // Return loading or error states
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Component>
            <Deal>
                <DealText>Product Deals</DealText>
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Deal>
            <Divider />

            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}  // 5 seconds
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
            >
                {products.map((product) => (
                    <StyledCard key={product._id} onClick={() => handleCardClick(product._id)}>
                        <Image src={product.url} alt={product.title?.longTitle || 'Product Image'} />
                        <Text sx={{ fontWeight: 600, color: '#212121' }}>
                            {product.title?.shortTitle || 'Product Title'}
                        </Text>
                        <Text sx={{ color: 'green' }}>
                            {product.discount || 'No Discount'}
                        </Text>
                        <Text sx={{ color: '#212121', opacity: 0.6 }}>
                            {product.tagline || 'No Tagline Available'}
                        </Text>
                    </StyledCard>
                ))}
            </Carousel>
        </Component>
    );
};

export default Slide;
