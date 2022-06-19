import React from 'react'
import {InitialStateType, UserType} from "../../redux/users.reducer";
import style from './users.module.css'
import {mapDispatchToPropsType, MapStateToPropsType, UsersPropsType} from "./UsersContainer";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'




export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.usersPages.users.length === 0) {
        axios.get ("https://social-network.samuraijs.com/api/1.0").then(response => {
            props.setUsers(response.data.items)
        })
        // props.setUsers ([
        //     {
        //         id: '1',
        //         photoUrl:'https://cdn.spbdnevnik.ru/uploads/block/image/515862/__medium_%D0%BA%D0%B5%D1%80%D1%80%D0%B8.jpg.jpg',
        //         followed: false,
        //         fullName: 'Dmitry',
        //         status: 'I am a boss',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: '2',
        //         photoUrl:'https://cdn.spbdnevnik.ru/uploads/block/image/515862/__medium_%D0%BA%D0%B5%D1%80%D1%80%D0%B8.jpg.jpg',
        //         followed: true,
        //         fullName: 'Sasha',
        //         status: 'I am a boss',
        //         location: {city: 'Moscow', country: 'Russia'}
        //     },
        //     {
        //         id: '3',
        //         photoUrl:'https://cdn.spbdnevnik.ru/uploads/block/image/515862/__medium_%D0%BA%D0%B5%D1%80%D1%80%D0%B8.jpg.jpg',
        //         followed: false,
        //         fullName: 'Andrew',
        //         status: 'I am a boss',
        //         location: {city: 'Kiev', country: 'Ukraine'}
        //     },
        // ])
    }

    return <div>
        {
            props.usersPages.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img className={style.photo} src={el.photoUrl.small !== null ? el.photoUrl.small: userPhoto}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {props.unfollow(el.id)}}> Unfollow</button>
                            : <button onClick={() => {props.follow(el.id)}}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.country}</div>
                        <div>{el.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}