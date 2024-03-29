import React from "react";
import {UserType} from "../../redux/users.reducer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./User";


type UsersType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChange: (pageNumber: number) => void,
    users: Array<UserType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    followingInProgress: any[]
    toggleFollowingProgress: (userId: string, followingInProgress: boolean) => void
}

export let Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            <Paginator currentPage={props.currentPage} onPageChange={props.onPageChange}
                       totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
                       portionSize = {10}
            />
        </div>
        <div>
            {
                props.users.map(el => <User user={el}
                                            key={el.id}
                                            followingInProgress={props.followingInProgress}
                                            unfollow={props.unfollow}
                                            follow={props.follow}

                />)
            }
        </div>
    </div>
}