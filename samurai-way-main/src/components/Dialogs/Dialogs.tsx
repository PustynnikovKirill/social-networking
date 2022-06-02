import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, StoreType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs.reducer";

export type DialogsType = {
    store:StoreType
}

export const Dialogs:React.FC<DialogsType> = (props) => {
    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElement =   state.messages.map(el=><Message key={el.id} id={el.id} messages={el.messages}/>)
    let newMessageBody =   state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder= 'Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}



