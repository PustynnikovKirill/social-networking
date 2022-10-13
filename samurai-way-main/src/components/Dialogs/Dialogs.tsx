import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, StoreType} from "../../redux/store";
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs.reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

export type DialogsType = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
    dialogsPage:InitialStateType
    isAuth:boolean
}
export const Dialogs:React.FC<DialogsType> = (props) => {
    let state = props.dialogsPage
    //let state = props.store.getState().dialogsPage

    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElement =   props.dialogsPage.messages.map(el=><Message key={el.id} id={el.id} messages={el.messages}/>)
    let newMessageBody =   props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
        //props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
        //props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    if (!props.isAuth) {
            return <Redirect to={'/login'}/>
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



