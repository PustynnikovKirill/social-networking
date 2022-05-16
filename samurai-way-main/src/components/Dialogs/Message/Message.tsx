import React from 'react';
import style from './Message.module.css';


export type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}
