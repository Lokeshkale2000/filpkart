import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/headers/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider";
import ProductDetail from './components/itemDetails/ProductDetail';
import Cart from "./components/home/Cart";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </Router>
    </DataProvider>
  );
}

export default App;
