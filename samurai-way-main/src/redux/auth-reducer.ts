import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {AppDispatch} from "./redux-store";
import {FormAction} from "redux-form/lib/actions";

export type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl:string | null,
}


const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl:null

}


export const authReducer = (state = initialState, action: ActionsTypeAuthReducer): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {...state, ...action.payload}
        case 'AUTH/GET_CAPTCHA_URL_SUCCESS':
            return {...state, captchaUrl:action.payload.captchaUrl}
        default:
            return state

    }
}

export type ActionsTypeAuthReducer = setUserDataType | getCaptchaUrlType

type setUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'AUTH/SET_USER_DATA',
        payload: {
            id, email, login, isAuth
        }
    } as const
}

type getCaptchaUrlType = ReturnType<typeof getCaptchaUrlSuccess>
export const getCaptchaUrlSuccess = (captchaUrl: string|null) => {
    return {
        type: 'AUTH/GET_CAPTCHA_URL_SUCCESS',
        payload: {
            captchaUrl
        }
    } as const
}

export const getAuthUserData = () => async (dispatch: AppDispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl: string | null) => async (dispatch: AppDispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captchaUrl)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        // @ts-ignore
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}