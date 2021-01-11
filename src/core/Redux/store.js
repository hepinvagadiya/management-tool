import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import auth from './auth/authReducer'
import data from "./Blog/postsReducer";
import userdata from './User/userReducer'

const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;
const store = createStore(
    combineReducers({ auth, data, userdata }),
    composeEnhancers(applyMiddleware(thunk)),
);
export default store;