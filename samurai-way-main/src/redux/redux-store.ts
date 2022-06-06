import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile.reducer";
import {dialogsReducer} from "./dialogs.reducer";
import {sidebarReducer} from "./sidebar.reducer";

let redusers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer

})

export let store = createStore(redusers)

export type AppRootStateType = ReturnType<typeof redusers>

export type RootStoreType = typeof store