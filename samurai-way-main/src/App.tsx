import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {AppRootStateType, RootStoreType, store} from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {WithAuthRedirect} from "./hoc/withAuthRedirect";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
// import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')
    .then(({DialogsContainer})=>{
        return {
            default: DialogsContainer
        }
    })
);

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToProps = {
    initialized: boolean
}

class App extends React.Component<MapStateToProps & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => (
                            <WithAuthRedirect>
                                <React.Suspense fallback={<div>Loading...</div>}>
                                    <DialogsContainer/>
                                </React.Suspense>
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
}

const mapStateToProps = (state: AppRootStateType) => {
    return {initialized: state.app.initialized}
}
let AppContainer = compose<React.FC>(withRouter, connect(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp = (props: any) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;