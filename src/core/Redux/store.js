import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import email from './auth/authReducer';
import auth from './auth/authReducer';
import otp from './auth/authReducer';
import changePassword from './auth/authReducer'
import data from "./Blog/postsReducer";
import table from './User/userReducer';
import findUser from './User/userReducer';

const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;
const store = createStore(
    combineReducers({ auth, otp, email, data, table, changePassword, findUser }),
    composeEnhancers(applyMiddleware(thunk)),
);
export default store;