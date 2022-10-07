import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users.reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChange: (pageNumber: number) => void,
    users: Array<UserType>,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    toggleIsFetching:(isFetching:boolean)=>void,
    followingInProgress: any[]
    toggleFollowingProgress:(userId: string,followingInProgress: boolean)=>void
}

export let Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(el => {
                return <span className={props.currentPage === el ? style.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChange(el)
                             }}
                >{el}</span>
            })}
        </div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                        <img className={style.photo} src={el.photos.small != null ? el.photos.small : userPhoto}/>
                        </NavLink>
                        </div>
                    <div>
                        {el.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===el.id)} onClick={() => {
                                props.toggleFollowingProgress(el.id,true)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {withCredentials: true, headers: {"API-KEY":'a05e4936-3d20-4899-8b3f-14b5bf4433fb'}})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(el.id)
                                        }
                                        props.toggleFollowingProgress(el.id,false)
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=>id===el.id)} onClick={() => {
                                props.toggleFollowingProgress(el.id,true)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {withCredentials: true, headers: {"API-KEY":'a05e4936-3d20-4899-8b3f-14b5bf4433fb'}})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(el.id)
                                        }
                                        props.toggleFollowingProgress(el.id,false)
                                    })

                            }}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{'el.location.country'}</div>
                        <div>{'el.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}