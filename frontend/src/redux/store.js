import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // <--- Change ici (remplacez 'default' par 'thunk')
// import { composeWithDevTools } from 'redux-devtools-extension'; 
// import { getAllPizzaReducer, addPizzaReducer, getPizzaByIdReducer } from './reducers/pizzaReducer';
// import { cartReducer } from './reducers/cartReducer';
import { getAllBlogReducer } from './reducers/blogReducer';
import { registerUserReducer } from './reducers/userReducer';
// import { placeOrderReducer, getUserOrdersReducer, allUserOrdersReducer } from './reducers/orderReducer';

const rootReducer = combineReducers({
    getAllBlogReducer: getAllBlogReducer,
    // cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    // loginUserReducer: loginUserReducer,
    // placeOrderReducer: placeOrderReducer,
    // getUserOrdersReducer: getUserOrdersReducer,
    // addPizzaReducer: addPizzaReducer,
    // getPizzaByIdReducer: getPizzaByIdReducer,
    // allUserOrdersReducer: allUserOrdersReducer,
    // getAllUsersReducer: getAllUsersReducer,
});

// const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
// const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    // cartReducer: {
    //     cartItems: cartItems,
    // },
    // loginUserReducer: {
    //     currentUser: currentUser,
    // },
};

const middleware = [thunk]; // <--- Change ici

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;