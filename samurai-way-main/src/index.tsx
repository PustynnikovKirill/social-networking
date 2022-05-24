import React from 'react';
import './index.css';
import {App} from './App';
import {state, subscribe} from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, RootStateType, updateNewPostText} from './redux/state'
import {BrowserRouter} from "react-router-dom";



export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App  state = {state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
subscribe(rerenderEntireTree)
