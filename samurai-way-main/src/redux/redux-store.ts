import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile.reducer";
import {dialogsReducer} from "./dialogs.reducer";
import {sidebarReducer} from "./sidebar.reducer";
import {usersReducer} from "./users.reducer";

let reducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer,
    usersPages: usersReducer

})

export let store = createStore(reducer)

export type AppRootStateType = ReturnType<typeof reducer>

export type RootStoreType = typeof store

// @ts-ignore
window.store = store