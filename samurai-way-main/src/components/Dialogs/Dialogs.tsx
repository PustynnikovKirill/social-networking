import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem, PropsDialogItemType} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type PropsDialogType = {
    dialogsData:Array<PropsDialogItemType>
}
export const Dialogs = (props:PropsDialogType) => {

    let messagesData = [
        {id: '1', messages: 'Hi'},
        {id: '2', messages: 'How is your it-kamasutra!'},
        {id: '3', messages: 'Yo'},
        {id: '4', messages: 'Yo'},
        {id: '5', messages: 'Yo'},
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogsData.map(el => <DialogItem  name={el.name} id={el.id}/>)}
            </div>
            <div className={style.messages}>
                {messagesData.map(el=>{
                    return (
                        <Message message={el.messages}/>
                    )
                })}
            </div>
        </div>
    );
}