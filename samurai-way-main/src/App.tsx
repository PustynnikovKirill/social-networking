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
import Login from "./components/Login/Login";
import {WithAuthRedirect} from "./hoc/withAuthRedirect";

export type AppPropsType = {
    state: AppRootStateType
    dispatch: (action: ActionsTypes) => void
    store: RootStoreType
}

export const App: React.FC<AppPropsType> = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => (
                        <WithAuthRedirect>
                            <DialogsContainer/>
                        </WithAuthRedirect>
                    )}/>
                    <Route path='/profile/:userId?' render={() =>
                        <WithAuthRedirect>
                            <ProfileContainer/>
                        </WithAuthRedirect>}/>

                    <Route path='/users' render={() =>
                        <WithAuthRedirect>
                            <UsersContainer/>
                        </WithAuthRedirect>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


