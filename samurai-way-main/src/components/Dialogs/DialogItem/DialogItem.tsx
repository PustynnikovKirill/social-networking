import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './DialogItem.module.css';



export type DialogType = {
    id: number
    name: string
}


export const DialogItem:React.FC<DialogType>= (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
