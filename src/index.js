import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { thunk } from 'redux-thunk';
import { legacy_createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './State/reducers/index';

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
console.warn("store data", store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
