import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, RootStateType, StoreType} from "./redux/store";
import {AppRootStateType} from "./redux/redux-store";

export type AppPropsType = {
    state:AppRootStateType
    dispatch:(action:ActionsTypes)=>void
    store:any
}

export const App:React.FC<AppPropsType> = (props) => {


    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path = '/dialogs' render = {()=> <Dialogs  store={props.store}/>}/>
                <Route path = '/profile' render = {()=> <Profile state = {props.state.profilePage} dispatch={props.dispatch}/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


