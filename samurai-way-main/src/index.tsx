import React from 'react';
import './index.css';
import {App} from './App';
import {store} from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";



export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App  state = {store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree)
