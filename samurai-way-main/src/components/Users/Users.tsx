import React from 'react'
import {InitialStateType, UserType} from "../../redux/users.reducer";
import style from './users.module.css'
import {mapDispatchToPropsType, MapStateToPropsType, UsersPropsType} from "./UsersContainer";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'


export class Users extends React.Component {
    componentDidMount() {
            axios.get("https://social-network.samuraijs.com/api/1.0")
                .then(response => {
                    this.props.setUsers(response.data.items);
                })

    }
    render() {
        return <div>
            {
                this.props.usersPages.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photoUrl.small !== null ? el.photoUrl.small : userPhoto} className={style.photo} />
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                this.props.unfollow(el.id)
                            }}> Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(el.id)
                            }}>Follow</button>
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
}