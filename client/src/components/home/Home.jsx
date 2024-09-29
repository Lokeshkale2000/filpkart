import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box,styled } from "@mui/material";
import MidSection from "./MidSection";
//import MidSlide from "./MidSlider";
import {useEffect} from 'react';
import {getProducts} from "../../redux/actions/productActions";
import {useDispatch,useSelector} from  'react-redux';



const Components= styled(Box)`
padding:10px;
background:#F2F2;`
const Home = () => {

  
  
  const  {products}=useSelector(state=>state.getProducts)
  console.log(products);
  const dispatch = useDispatch();

  useEffect(()=>{
 
    dispatch(getProducts())

  },[dispatch])
  return (
    <Fragment>
      <Navbar></Navbar>
      <Components>
        
        <Banner></Banner>
        
      </Components>
      <Box> <MidSection></MidSection></Box>
     
     
    </Fragment>
  );
};

export default Home;
