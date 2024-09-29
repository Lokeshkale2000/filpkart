import { Box, styled, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
//import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
  position: relative; /* Added for positioning ListWrapper */
`;

const SearchIconWrapper = styled(Box)`
  padding: 5px;
  display: flex;
  color: blue;
`;

/*const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
  max-height: 300px; 
  overflow-y: auto; 
  width: 100%;
  z-index: 1; 
`;*/

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase
                placeholder="Search for products, brands and more"
                inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
           
        </SearchContainer>
    );
}

export default Search;
