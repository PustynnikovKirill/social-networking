import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'


type HeaderPropsType = {
    isAuth:boolean,
    login:string,
    logout:()=>void
}
export const Header:React.FC<HeaderPropsType>  = (props) => {
    return <header className={style.header}>
                <img src='https://cdn.segodnya.ua/i/image_728x410/media/image/620/23c/d13/62023cd134531.jpg.webp'/>
                <div className={style.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    :<NavLink to={'/login'}>Login</NavLink>}
                </div>
        </header>

}