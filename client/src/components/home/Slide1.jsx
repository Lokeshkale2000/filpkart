import React from 'react';
import { Box, Typography, styled, Button, Divider } from '@mui/material';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import dealData from './Slide1data'; // Import your products array
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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
    gap: 30px;    
    cursor: pointer; /* Add pointer cursor for click indication */
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

const Slide1 = () => {
    const navigate = useNavigate(); // Use navigate for programmatic navigation

    const handleCardClick = (id) => {
        navigate(`/product/${id}`); // Navigate to product detail page
    };

    return (
        <Component>
            <Deal>
                <DealText>Best Deals</DealText>
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {dealData.map((product) => ( // Change products to dealData
                    <StyledCard key={product.id} onClick={() => handleCardClick(product.id)}>
                        <Image src={product.url} alt={product.title.longTitle} />
                        <Text sx={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                        <Text sx={{ color: 'green' }}>{product.discount}</Text>
                        <Text sx={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Text>
                    </StyledCard>
                ))}
            </Carousel>
        </Component>
    );
};

export default Slide1;
