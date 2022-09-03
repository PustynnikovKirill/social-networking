// import {ActionsTypeUsersReducer} from "./store";


export type InitialStateType = {users:Array<UserType>,pageSize:number,totalUsersCount:number, currentPage:number}

export type UserType = {
    id: string,
    photos:{small: string, large: string},
    followed:boolean,
    name: string,
    status: string,
    location: {city: string, country: string}
}
const initialState:InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}



export const usersReducer = (state = initialState, action: ActionsTypeUsersReducer):InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case 'SET_USERS':
            return {...state, users:action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage:action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount:action.totalCount}
        default:
            return state

    }

}
export type ActionsTypeUsersReducer = followACType | unfollowACType | setUsersACType | setCurrenPageACType | setTotalUsersCountACType
type followACType = ReturnType<typeof followAC>
export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        userId,
    } as const
}
type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        users,
    } as const
}

type setCurrenPageACType = ReturnType<typeof setCurrenPageAC>
export const setCurrenPageAC = (currentPage:number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage,
    } as const
}
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount:number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalCount,
    } as const
}