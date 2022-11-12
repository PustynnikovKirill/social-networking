import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: any[]
}

export type UserType = {
    id: number,
    photos: { small: string, large: string },
    followed: boolean,
    name: string,
    status: string,
    location: { city: string, country: string }
}
const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


export const usersReducer = (state = initialState, action: ActionsTypeUsersReducer): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case 'SET_USERS':
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'FOLLOWING_IN_PROGRESS':
            return {...state,
                followingInProgress: action.followingInProgress
                    ?[...state.followingInProgress, action.userId]
                    :state.followingInProgress.filter(id => id !== action.userId)}
        default:
            return state

    }

}
export type ActionsTypeUsersReducer =
    followACType
    | unfollowACType
    | setUsersACType
    | setCurrenPageACType
    | setTotalUsersCountACType
    | isFetchingACType
    | toggleFollowingProgressType

type followACType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
type unfollowACType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess  = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId,
    } as const
}
type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        users,
    } as const
}

type setCurrenPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage,
    } as const
}
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalCount,
    } as const
}
type isFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching,
    } as const
}

type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (userId:number,followingInProgress: boolean) => {
    return {
        type: 'FOLLOWING_IN_PROGRESS',
        userId,
        followingInProgress
    } as const
}

export const getUsersTC = (currentPage:number,pageSize:number) => (dispatch:Dispatch)=>{
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(currentPage,pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}
export const follow = (id:number) => (dispatch:Dispatch)=>{
    dispatch(toggleFollowingProgress(id,true))
    usersAPI.follow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch (followSuccess(id))
            }
            dispatch(toggleFollowingProgress(id,false))
        })
}
export const unfollow = (id:number) => (dispatch:Dispatch)=>{
    dispatch(toggleFollowingProgress(id,true))
    usersAPI.unfollow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch (unfollowSuccess(id))
            }
            dispatch(toggleFollowingProgress(id,false))
        })
}