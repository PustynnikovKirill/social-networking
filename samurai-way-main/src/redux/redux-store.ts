import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile.reducer";
import {dialogsReducer} from "./dialogs.reducer";
import {sidebarReducer} from "./sidebar.reducer";
import {usersReducer} from "./users.reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";

let reducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer,
    usersPages: usersReducer,
    auth:authReducer,
    app:appReducer,
    form:formReducer
})
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancers(
//     applyMiddleware(thunk)))

export let store = createStore(reducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof reducer>

export type RootStoreType = typeof store

// @ts-ignore
window.store = store