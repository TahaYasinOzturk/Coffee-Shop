import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getAllCoffeeReducer } from "./reducers/CoffeeReducers";
import { addToCartReducer } from "./reducers/CartReducers";
import { registerUserReducer } from "./reducers/UserReducers";

const compose = composeWithDevTools({});

const finalReducers = combineReducers({
	getAllCoffeeReducer: getAllCoffeeReducer,
	addToCartReducer: addToCartReducer,
	registerUserReducer: registerUserReducer,
});

const cartItems = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: [];

const initialState = {
	addToCartReducer: {
		cartItems: cartItems,
	},
};

const store = createStore(
	finalReducers,
	initialState,
	compose(applyMiddleware(thunk))
);

export default store;
