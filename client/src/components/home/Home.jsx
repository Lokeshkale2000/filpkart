import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box,styled } from "@mui/material";
import MidSection from "./MidSection";
//import MidSlide from "./MidSlider";

import Slid from "./Slid";




const Components= styled(Box)`
padding:10px;
background:#F2F2;`
const Home = () => {

  
  
  
  return (
    <Fragment>
      <Navbar></Navbar>
      <Components>
        
        <Banner></Banner>
        
      </Components>
      <Slid></Slid>
     
     <MidSection></MidSection>
    
    </Fragment>
  
  );
};

export default Home;
