import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

export type DialogsType = {
   state:DialogsPageType
}

export const Dialogs:React.FC<DialogsType> = (props) => {


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.state.dialogs.map(el => {
                 return (
                     <DialogItem key={el.id} name={el.name} id={el.id}/>
                 )
                })}
            </div>
            <div className={style.messages}>
                {props.state.messages.map(el=>{
                    return (
                        <Message key={el.id} id={el.id} messages={el.messages}/>
                    )
                })}
            </div>
        </div>
    );
}



