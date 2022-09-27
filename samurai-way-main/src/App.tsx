import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes} from "./redux/store";
import {AppRootStateType, RootStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

export type AppPropsType = {
    state:AppRootStateType
    dispatch:(action:ActionsTypes)=>void
    store:RootStoreType
}

export const App:React.FC<AppPropsType> = (props) => {


    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path = '/dialogs' render = {()=> <DialogsContainer/>}/>
                <Route path = '/profile/:userId?' render = {()=> <ProfileContainer/>}/>
                <Route path = '/users' render = {()=> <UsersContainer/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


