import {DataType} from "../components/Header/HeaderContainer";

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
        case 'SET_USER_DATA':
            return {...state, ...action.data, isAuth:true}
        default:
            return state

    }
}

export type ActionsTypeAuthReducer = setUserDataType

type setUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: DataType) => {
    return {
        type: 'SET_USER_DATA',
        data
    } as const
}
