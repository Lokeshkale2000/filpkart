import React from 'react';
import { Box, Typography, styled, Button, Divider } from '@mui/material';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

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

const Slide2 = () => {
    const furnitureData = [
        { 
            url: 'https://rukminim1.flixcart.com/image/300/300/ke7ff680/hammock-swing/j/f/u/q3-jkaf-y3l0-furniture-kart-original-imafux96kpy7grch.jpeg?q=70', 
            title: { shortTitle: 'Hammock And Swings' }, 
            discount: 'From ₹199', 
            tagline: 'Trendy Collection' 
        },
        { 
            url: 'https://rukminim1.flixcart.com/image/300/300/bean-bag/h/v/b/f8-the-furniture-store-xxxl-original-imae65d3wg7qzpkn.jpeg?q=70', 
            title: { shortTitle: 'Bean Bag Covers' }, 
            discount: 'Min 80% Off', 
            tagline: 'XL, XXL & More' 
        },
        { 
            url: 'https://rukminim1.flixcart.com/image/300/300/jlcmavk0/aquarium-tank/s/4/5/usb-desktop-aquarium-with-running-water-calendar-temperature-and-original-imaf8hv4nkv55gx8.jpeg?q=70', 
            title: { shortTitle: 'Aquarium Tank' }, 
            discount: 'From ₹299', 
            tagline: 'Flat, Round, Cube & More' 
        },
        { 
            url: 'https://rukminim1.flixcart.com/image/300/300/jffpoy80/office-study-chair/v/v/z/pp-am-5001cb-apex-original-imaf3u8rbr5cdycv.jpeg?q=70', 
            title: { shortTitle: 'Office & Study Chairs' }, 
            discount: 'Min 50% Off', 
            tagline: 'Fabric & Leatherette' 
        },
        { 
            url: 'https://rukminim1.flixcart.com/image/300/300/jvcp9jk0/recliner/z/w/x/brown-top-grain-leather-sf7018011-1-royaloak-original-imafg9s9hh9vzpf3.jpeg?q=70', 
            title: { shortTitle: 'Recliner' }, 
            discount: 'From ₹4999', 
            tagline: 'Bantia, RoyalOak & More' 
        },
        { 
            url: 'https://rukminim1.flixcart.com/image/300/300/jlqwpe80-1/tv-entertainment-unit/d/t/f/particle-board-holland-tv-unit-black-forzza-black-original-imaf8t5ybywcdtys.jpeg?q=70', 
            title: { shortTitle: 'Tv Units' }, 
            discount: 'From ₹2100', 
            tagline: 'Forzza, Zuari & more' 
        },
        { 
            url: 'https://rukminim1.flixcart.com/image/300/300/inflatable-sofa/6/j/s/wsb031a-velvet-wds-original-imaeaphzbkgrz3xp.jpeg?q=70', 
            title: { shortTitle: 'Inflatable Sofas' }, 
            discount: 'Min 50% Off', 
            tagline: 'Furn Central & more' 
        },
    ];

    return (
        <Component>
            <Deal>
                <DealText>Featured Items</DealText>
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
                {furnitureData.map((item, index) => (
                    <StyledCard key={index}>
                        <Image src={item.url} alt={item.title.shortTitle} />
                        <Text sx={{ fontWeight: 600, color: '#212121' }}>{item.title.shortTitle}</Text>
                        <Text sx={{ color: 'green' }}>{item.discount}</Text>
                        <Text sx={{ color: '#212121', opacity: '.6' }}>{item.tagline}</Text>
                    </StyledCard>
                ))}
            </Carousel>
        </Component>
    );
};

export default Slide2;
