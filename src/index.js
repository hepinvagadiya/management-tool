import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './core/Redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root'));

reportWebVitals();
