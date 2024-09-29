import {  createStore,applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';  // Importing correctly
import { composeWithDevTools } from 'redux-devtools-extension'; // Ensure this package is installed

import { cartReducer } from './reducers/cartReducer';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware)) 
);

export default store;
