import {
  Box,
  styled,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

// Styled components
const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "0 130px", // Adjusted margin
  position: "relative", // Added relative positioning
  zIndex: 1000, // Ensure the main component has high zIndex
  [theme.breakpoints.down("lg")]: {
    margin: "0px",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  padding: "12px 8px",
  textAlign: "center",
  position: "relative", // Set relative positioning for the dropdown to align correctly
  cursor: "pointer",
  zIndex: 1000, // Ensure it stays above other elements
}));

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const Dropdown = styled(Box)`
  display: ${({ isOpen }) =>
    isOpen ? "block" : "none"}; // Control visibility based on isOpen state
  position: absolute;
  top: 100%; // Position below the container
  left: 0;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 2000; // Higher zIndex to be on top
  text-align: left;
  width: 200px;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)}; // Set opacity for transition
  visibility: ${({ isOpen }) =>
    isOpen
      ? "visible"
      : "hidden"}; // Control visibility for smoother experience
`;

const DropdownItem = styled(Typography)`
  font-size: 14px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;

// Customized Paper component for dialog
const CustomDialogPaper = styled(Box)`
  background-color: #f9f9f9; /* Background color for the dialog */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); /* Shadow effect */
  padding: 20px; /* Padding inside the dialog */
`;

// Customized DialogContent
const CustomDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; /* Adjust padding as necessary */
  text-align: center; /* Center align text */
  background-color: #ffffff; /* Background color for content */
`;

export const navData = [
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    text: "Top Offers",
    dropdownItems: [
      "20% off on all electronics",
      "Buy one get one free on selected groceries",
      "50% off on summer clothing",
      "Free shipping on orders over $50",
      "15% off first purchase with newsletter signup",
      "30% off on home appliances",
      "Clearance sale: Up to 70% off",
      "Buy 2, get 1 free on beauty products",
      "10% off your next order with promo code",
      "Free gift with every purchase over $100",
    ],
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    text: "Grocery",
    dropdownItems: [
      "Plastic Bags",
      "Cardboard Boxes",
      "Glass Jars",
      "Plastic Containers",
      "Tin Cans",
      "Paper Bags",
      "Cling Film",
      "Aluminum Foil",
      "Vacuum Sealed Bags",
      "Shrink Wrap",
      "Bulk Bins",
      "Tetra Packs",
      "Pouches",
      "Cartons",
    ],
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    text: "Mobile",
    dropdownItems: [
      "Apple",
      "Samsung",
      "Huawei",
      "Xiaomi",
      "OnePlus",
      "Google",
      "Sony",
      "Nokia",
      "LG",
      "Oppo",
      "Vivo",
      "Motorola",
      "Realme",
      "Asus",
      "HTC",
    ],
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
    text: "Fashion",
    dropdownItems: [
      "Casual Wear",
      "Formal Wear",
      "Sportswear",
      "Streetwear",
      "Activewear",
      "Evening Wear",
      "Beachwear",
      "Loungewear",
      "Business Casual",
      "Traditional Wear",
      "Outerwear",
    ],
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    text: "Electronics",
    dropdownItems: [
      "Smartphone",
      "Laptop",
      "Tablet",
      "Smartwatch",
      "Television",
      "Headphones",
      "Bluetooth Speaker",
      "Digital Camera",
      "Game Console",
      "Printer",
      "Desktop Computer",
      "External Hard Drive",
      "Smart Home Device",
      "Fitness Tracker",
    ],
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100",
    text: "Home",
    dropdownItems: [
      "Furniture",
      "Decor",
      "Lighting",
      "Sofa",
      "Chair",
      "Dining Table",
      "Coffee Table",
      "Bed",
      "Dresser",
      "Nightstand",
      "Bookshelf",
      "Desk",
      "Office Chair",
      
    ],
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
    text: "Appliances",
    dropdownItems: [
      "Fridge",
      "Washing Machine",
      "Microwave",
      "Microwave Oven",
      "Dishwasher",
      "Oven",
      "Stove",
      "Blender",
      "Toaster",
      "Coffee Maker",
      "Air Conditioner",
      
    ],
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
    text: "Travel",
    dropdownItems: [
      "Flights",
      "Car",
      "Bus",
      "Train",
      "Airplane",
      "Bicycle",
      "Motorcycle",
      
      "Boat",
      "Cruise Ship",
      "Tram",
     
    ],
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
    text: "Beauty, Toys & More",
    dropdownItems: [
      "Cosmetics",
      "LEGO Sets",
      "Barbie Dolls",
      "Hot Wheels Cars",
      "Action Figures",
      "Play-Doh",
      "Nerf Blasters",
      "Board Games",
      "Puzzle Games",
      "Stuffed Animals",
      "RC Cars and Drones",
      
    ],
  },
];

// Navbar component
const Navbar = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const dropdownRef = useRef();

  const handleClick = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdownIndex(null);
    }
  };

  const handleDropdownItemClick = (item) => {
    setDialogContent(item);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Component>
      {navData.map((data, index) => (
        <Container
          key={data.text}
          onClick={() => handleClick(index)}
          ref={dropdownRef}
        >
          <img src={data.url} alt={data.text} style={{ width: 64 }} />
          <Text>{data.text}</Text>
          <Dropdown isOpen={openDropdownIndex === index}>
            {data.dropdownItems.map((item, idx) => (
              <DropdownItem
                key={idx}
                onClick={() => handleDropdownItemClick(item)}
              >
                {item}
              </DropdownItem>
            ))}
          </Dropdown>
        </Container>
      ))}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        PaperProps={{ component: CustomDialogPaper }}
      >
        <DialogTitle>Item Selected</DialogTitle>
        <CustomDialogContent>
          <Typography variant="h6">You clicked on:</Typography>
          <Typography variant="body1" style={{ marginTop: "10px" }}>
            {dialogContent}
          </Typography>
        </CustomDialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Component>
  );
};

export default Navbar;
