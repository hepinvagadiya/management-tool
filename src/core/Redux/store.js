import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import data from "./Blog/postsReducer";

const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;

const store = createStore(
    combineReducers({ data }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;