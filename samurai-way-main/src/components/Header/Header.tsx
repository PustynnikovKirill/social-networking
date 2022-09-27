import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'
import {DataType} from "./HeaderContainer";


type HeaderPropsType = {

    data:DataType
}
export const Header:React.FC<HeaderPropsType>  = (props) => {
    return <header className={style.header}>
                <img src='https://cdn.segodnya.ua/i/image_728x410/media/image/620/23c/d13/62023cd134531.jpg.webp'/>
                <div className={style.loginBlock}>
                    {props.data.isAuth ? props.data.login
                    :<NavLink to={'/login'}>Login</NavLink>}
                </div>
        </header>

}