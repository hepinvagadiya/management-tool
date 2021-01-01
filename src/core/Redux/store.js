// import { configureStore } from '@reduxjs/toolkit'
// import postsReducer from '../Redux/Blog/postsSlice'
// import Data from './reducer';

// export default configureStore({
//   reducer: {
//     Posts: postsReducer,
//   },
// })

import { createStore } from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools())

export default store;