import React from 'react';
import style from './Message.module.css';


export type MessageType = {
    id: string
    messages: string
}

export const Message:React.FC<MessageType> = (props) => {
    return (
        <div className={style.message}>{props.messages}</div>
    )
}