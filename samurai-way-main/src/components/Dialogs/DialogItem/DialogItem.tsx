import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './DialogItem.module.css';

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
