import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to = '/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to = '/dialogs/2'>Sveta</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to = '/dialogs/3'>Andrey</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to = '/dialogs/4'>Sacha</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to = '/dialogs/5'>Valera</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How is your it-kamasutra!</div>
                <div className={style.message}>Yo</div>
            </div>
        </div>
    );
}