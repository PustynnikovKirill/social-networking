import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

export type AppPropsType = {
    state:RootStateType
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
}


export const App:React.FC<AppPropsType> = (props) => {


    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path = '/dialogs' render = {()=> <Dialogs state = {props.state.dialogsPage}/>}/>
                <Route path = '/profile' render = {()=> <Profile state = {props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


