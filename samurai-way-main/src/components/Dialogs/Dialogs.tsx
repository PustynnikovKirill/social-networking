import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    let dialogsData = [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Viktor'},
        {id: '6', name: 'Valera'},
    ]
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
                {dialogsData.map(el => <DialogItem  name={el.name} id={el.id}/>)}
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