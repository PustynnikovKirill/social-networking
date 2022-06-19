import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink>
            </div>
            <div className={style.item}>
                <a href = "/news">News</a>
            </div>
            <div className={style.item}>
                <a href = "/music">Music</a>
            </div>
            <div className={style.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}