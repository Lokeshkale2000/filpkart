import Header from "./components/headers/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider";



function App() {
  return (
    <DataProvider>
      <Header></Header>
      <Box style={{ marginTop: 54 }}>
      
        <Home></Home>
      </Box>
    </DataProvider>
  );
}

export default App;
