import React from 'react'
import style from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "./UsersContainer";

export const Users:React.FC<UsersPropsType> = (props:any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
            <div>
                {pages.map(p => {
                            return <span className={props.currentPage === p ? style.selectedPage : ''}
                            onClick={()=>{props.onPageChanged(p)}}>{p}</span>
                        }
                    )}
        </div>
    {
        props.users.map(el => <div key={el.id}>
        <span>
            <div>
                <img src={el.photoUrl?.small ? el.photoUrl.small : userPhoto} className={style.photo}/>
    </div>
    <div>
    {el.followed
            ? <button onClick={() => {
        props.unfollow(el.id)
    }}> Unfollow</button>
    : <button onClick={() => {
        props.follow(el.id)
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
        <div>{el.location?.country}</div>
        <div>{el.location?.city}</div>
        </span>
        </span>
        </div>)
    }
    </div>
}