import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile.reducer";
import {dialogsReducer} from "./dialogs.reducer";
import {sidebarReducer} from "./sidebar.reducer";
import {usersReducer} from "./users.reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let reducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer,
    usersPages: usersReducer,
    auth:authReducer,
    form:formReducer
})

export let store = createStore(reducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof reducer>

export type RootStoreType = typeof store

// @ts-ignore
window.store = store