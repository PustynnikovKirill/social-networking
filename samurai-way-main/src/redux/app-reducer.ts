import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";


export type InitialStateType = {
    initialized: boolean,
}

const initialState: InitialStateType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: ActionsTypeAuthReducer):InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {...state, initialized:action.initialized}
        default:
            return state
    }
}

export type ActionsTypeAuthReducer = setUserDataType

type setUserDataType = ReturnType<typeof setInitializedSuccessAC>

export const setInitializedSuccessAC = (initialized:boolean) => {
    return {
        type: 'SET_INITIALIZED',
        initialized
    } as const
}
export const initializeApp = () => (dispatch:Dispatch) => {
   // @ts-ignore
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(()=>{
        dispatch(setInitializedSuccessAC(true))
    })
}
