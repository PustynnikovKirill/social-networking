import React from 'react';
import './index.css';
import {App} from './App';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {AppRootStateType, store} from "./redux/redux-store";
import {Provider} from "react-redux";



export let rerenderEntireTree = (state:AppRootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App  state = {state} dispatch={store.dispatch.bind(store)} store={store}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})
