import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import auth from './auth/authReducer';
import blogs from "./Blog/postsReducer";
import table from './User/userReducer';
import groupTable from './UserGroup/userGroupReducer'
import ProgressList from './Task-Management/taskReducer'

const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;
const store = createStore(
    combineReducers({
        auth,
        table,
        groupTable,
        blogs,
        ProgressList,
    }),
    composeEnhancers(applyMiddleware(thunk)),
);
export default store;   