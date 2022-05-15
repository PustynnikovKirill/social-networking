import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

export type PropsDialogItemType = {
    name:string
    id: string
}

export const DialogItem = (props:PropsDialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
    <div className={style.dialog + ' ' + style.active}>
        <NavLink to = {path}>{props.name}</NavLink>
    </div>
    )
}
export type MessageType = {
    message: string
}

const Message = (props:MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem  name={'Dimych'} id={'1'}/>
                <DialogItem  name={'Andrey'} id={'2'}/>
                <DialogItem  name={'Sveta'} id={'3'}/>
                <DialogItem  name={'Sasha'} id={'4'}/>
                <DialogItem  name={'Viktor'} id={'5'}/>
                <DialogItem  name={'Valera'} id={'6'}/>
            </div>
            <div className={style.messages}>
                <Message message = {"Hi"}/>
                <Message message = {"How is your it-kamasutra!"}/>
                <Message message = {"Yo"}/>
                <Message message = {"Yo"}/>
                <Message message = {"Yo"}/>
            </div>
        </div>
    );
}