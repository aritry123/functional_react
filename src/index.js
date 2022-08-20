import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App'
import reducer from './Redux/Reducers'
import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './ReduxTookitConfigs/Reducers/LoginReducer';
// import UserSlice, { fetchUsers } from './CRUDUsingToolkit/UserSlice';
// const store=createStore(reducer)
// import Store from './ReduxThunk/Store/Store';
// const store=configureStore({
//     reducer:{
//         // userinfo:LoginReducer
//         userinfo:UserSlice
//     }
// })
// import store from './CRUDUsingToolkitLiveServer/Store'
// import { fetchUsers } from './CRUDUsingToolkitLiveServer/Slice';
// store.dispatch(fetchUsers())
// store.dispatch(fetchUsers())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    // <Provider store={store}>
    //     <App/>
    // </Provider>
);