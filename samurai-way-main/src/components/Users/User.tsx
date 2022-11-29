import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/users.reducer";


type UserOneType = {
    key:number
    user: UserType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: any[]
}

export let User = (props: UserOneType) => {


    return (
        <div key={props.key}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}>
                        <img className={style.photo} src={props.user.photos.small != null ? props.user.photos.small : userPhoto}/>
                        </NavLink>
                        </div>
                    <div>
                        {props.user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                props.unfollow(props.user.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                props.follow(props.user.id)
                            }}>Follow</button>
                        }

                    </div>
                </span>
            <span>
                    <span>
                        <div>{props.user.name}</div>
                        <div>{props.user.status}</div>
                    </span>
                    <span>
                        <div>{'el.location.country'}</div>
                        <div>{'el.location.city'}</div>
                    </span>
                </span>
        </div>
    )
}