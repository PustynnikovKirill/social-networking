import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, StoreType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs.reducer";
import {Dialogs} from "./Dialogs";

export type DialogsType = {
    store:StoreType
}

export const DialogsContainer:React.FC<DialogsType> = (props) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}
        />
    );
}



