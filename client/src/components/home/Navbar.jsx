import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '55px 130px 0 130px !important',
  overflowX: 'overlay',
  [theme.breakpoints.down('lg')]: {
      margin: '0px !important'
  }
}))

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center
`

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;


export const navData = [
  { url: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100', text: 'Top Offers' },
  { url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', text: 'Grocery' },
  { url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', text: 'Mobile' },
  { url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', text: 'Fashion' },
  { url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', text: 'Electronics' },
  { url: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100', text: 'Home' },
  { url: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100', text: 'Appliances' },
  { url: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100', text: 'Travel' },
  { url: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', text: 'Beauty, Toys & More' }
];

const Navbar = () => {
  return (
    <Component>
      {
        navData.map((data) => (
          <Container key={data.text}> {/* Using text as key */}
            <img src={data.url} alt={data.text} style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </Container>
        ))
      }
    </Component>
  );
}

export default Navbar;
