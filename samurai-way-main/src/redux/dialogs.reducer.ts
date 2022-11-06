import {ActionsTypes} from "./store";
import {FormMessageDataType} from "../components/Dialogs/Dialogs";

const SEND_MESSAGE = 'SEND-MESSAGE'


export type DialogType = {
    id:number,
    name:string,
}
export type MessageType = {
    id:number,
    messages:string
}
export type InitialStateType = typeof initialState

let initialState = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ] as Array<DialogType>,
        messages: [
            {id: 1, messages: 'Hi'},
            {id: 2, messages: 'How is your it-kamasutra!'},
            {id: 3, messages: 'Yo'},
            {id: 4, messages: 'Yo'},
            {id: 5, messages: 'Yo'},
        ] as Array<MessageType>,
    }

export const dialogsReducer = (state= initialState, action:ActionsTypes) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody.newMessageBody;
            return {
                ...state,
                messages:[...state.messages, {id: 6, messages: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody:FormMessageDataType) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
}
