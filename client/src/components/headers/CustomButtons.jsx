import React from "react";
import { Box, Typography, Badge, Button, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from "react";


import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
//import { useSelector } from 'react-redux';

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    marginTop: 10,
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    color: "#FFFFFF",
    fontSize: 12,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      color: "#2874f0",
      flexDirection: "column",
    },
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 2,
  padding: "5px 40px",
  height: 32,
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    background: "#2874f0",
    color: "#FFFFFF",
  },
}));

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount}></Profile>
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={0} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
    </Wrapper>
  );
};

export default CustomButtons;
