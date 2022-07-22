import {ActionsTypes} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


export type DialogType = {
    id:string,
    name:string,
}
export type MessageType = {
    id:string,
    messages:string
}
export type InitialStateType = typeof initialState

let initialState = {
        dialogs: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Andrey'},
            {id: '3', name: 'Sveta'},
            {id: '4', name: 'Sasha'},
            {id: '5', name: 'Viktor'},
            {id: '6', name: 'Valera'}
        ] as Array<DialogType>,
        messages: [
            {id: '1', messages: 'Hi'},
            {id: '2', messages: 'How is your it-kamasutra!'},
            {id: '3', messages: 'Yo'},
            {id: '4', messages: 'Yo'},
            {id: '5', messages: 'Yo'},
        ] as Array<MessageType>,
        newMessageBody: ''
    }

export const dialogsReducer = (state= initialState, action:ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages:[...state.messages, {id: '6', messages: body}]
            }
        default:
            return state
    }
}

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
