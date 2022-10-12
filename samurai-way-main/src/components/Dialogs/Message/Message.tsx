import React from 'react';
import style from './Message.module.css';


export type MessageType = {
    id: number
    messages: string
}

export const Message:React.FC<MessageType> = (props) => {
    return (
        <div className={style.message}>{props.messages}</div>
    )
}