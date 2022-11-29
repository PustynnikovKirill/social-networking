import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

export type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}


const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,

}


export const authReducer = (state = initialState, action: ActionsTypeAuthReducer): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {...state, ...action.payload}
        default:
            return state

    }
}

export type ActionsTypeAuthReducer = setUserDataType

type setUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'AUTH/SET_USER_DATA',
        payload: {
            id, email, login, isAuth
        }
    } as const
}
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {

    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {

        // @ts-ignore
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {

                dispatch(setAuthUserData(null, null, null, false))
            }
}