import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ActionsType, profileReducer} from "./profile.reducer";
import {dialogsReducer} from "./dialogs.reducer";
import {sidebarReducer} from "./sidebar.reducer";
import {ActionsTypeUsersReducer, usersReducer} from "./users.reducer";
import {ActionsTypeAuthReducer, authReducer} from "./auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";
import {useDispatch} from "react-redux";
import {ActionsTypes} from "./store";

let reducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer,
    usersPages: usersReducer,
    auth:authReducer,
    app:appReducer,
    form:formReducer,
})
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancers(
//     applyMiddleware(thunk)))

export let store = createStore(reducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof reducer>

type AppActionType = ActionsType | ActionsTypes | ActionsTypeUsersReducer | ActionsTypeAuthReducer

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionType>
export const useAppDispatch =()=>useDispatch<AppDispatch>()

export type RootStoreType = typeof store

// @ts-ignore
window.store = store