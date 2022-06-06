import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, RootStateType, StoreType} from "./redux/store";
import {AppRootStateType, RootStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

export type AppPropsType = {
    state:AppRootStateType
    dispatch:(action:ActionsTypes)=>void
    store:RootStoreType
}

export const App:React.FC<AppPropsType> = (props) => {


    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path = '/dialogs' render = {()=> <DialogsContainer  store={props.store}/>}/>
                <Route path = '/profile' render = {()=> <Profile store = {props.store} />}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


