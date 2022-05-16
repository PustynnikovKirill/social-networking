import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Dialogs.module.css';

export type PropsDialogItemType = {
    name: string
    id: string
}

export const DialogItem = (props: PropsDialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

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
                {/*  <DialogItem  name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem  name={dialogsData[1].name} id={dialogsData[1].id}/>
*/}
                {dialogsData.map(el => <DialogItem  name={el.name} id={el.id}/>)}
            </div>
            <div className={style.messages}>
              {/*  <Message message={"Hi"}/>
                <Message message={"How is your it-kamasutra!"}/>*/}
                {messagesData.map(el=>{
                    return (
                        <Message message={el.messages}/>
                    )
                })}
            </div>
        </div>
    );
}