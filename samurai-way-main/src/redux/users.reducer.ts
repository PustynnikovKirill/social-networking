// import {ActionsTypeUsersReducer} from "./store";


export type InitialStateType = {users:Array<UserType>, pageSize:number,totalUsersCount: number,currentPage:number}

export type UserType = {
    id: string,
    photoUrl:string,
    followed:boolean,
    fullName: string,
    status: string,
    location: {city: string, country: string}
}

const initialState:InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
}



export const usersReducer = (state = initialState, action: ActionsTypeUsersReducer):InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users ]}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage:action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount:action.count}
        default:
            return state

    }

}
export type ActionsTypeUsersReducer = followACType | unfollowACType | setUsersACType | setCurrentPageType | setTotalUsersCountType
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
type setCurrentPageType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage:number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage,
    } as const
}
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUserCount:number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        count:totalUserCount,
    } as const
}