const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ''
            state.messages.push({id: '6', messages: body})
            return state
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
