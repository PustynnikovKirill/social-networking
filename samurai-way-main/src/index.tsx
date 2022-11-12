import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {AppRootStateType, store} from "./redux/redux-store";
import {Provider} from "react-redux";




ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );



// store.subscribe(()=>{
//     let state = store.getState()
//     rerenderEntireTree(state)
// })
