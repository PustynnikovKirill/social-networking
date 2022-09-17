import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users.reducer";
import {NavLink} from "react-router-dom";

type UsersType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChange: (pageNumber: number) => void,
    users: Array<UserType>,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
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
                        <NavLink to = {'/profile/' + el.id}>
                        <img className={style.photo} src={el.photos.small != null ? el.photos.small : userPhoto}/>
                        </NavLink>
                        </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(el.id)
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