import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getAllCoffeeReducer } from "./reducers/CoffeeReducers";
import { addToCartReducer } from "./reducers/CartReducers";
import {
	registerUserReducer,
	loginUserReducer,
	logoutUserReducer,
} from "./reducers/UserReducers";

const compose = composeWithDevTools({});

const finalReducers = combineReducers({
	getAllCoffeeReducer: getAllCoffeeReducer,
	addToCartReducer: addToCartReducer,
	registerUserReducer: registerUserReducer,
	loginUserReducer: loginUserReducer,
	logoutUserReducer: logoutUserReducer,
});

const cartItems = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: [];

const currentUser = localStorage.getItem("currentUser")
	? JSON.parse(localStorage.getItem("currentUser"))
	: null;

const initialState = {
	addToCartReducer: {
		cartItems: cartItems,
	},
	loginUserReducer: {
		currentUser: currentUser,
	},
};

const store = createStore(
	finalReducers,
	initialState,
	compose(applyMiddleware(thunk))
);

export default store;
