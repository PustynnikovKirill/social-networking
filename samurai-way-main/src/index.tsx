import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';



let  postData = [
    {id:'1', messages:'Hi, how are you?',likesCount:11},
    {id:'2', messages:"it's my first !" ,likesCount:12}
]

ReactDOM.render(
    <App postData = {postData}/>,
  document.getElementById('root')
);