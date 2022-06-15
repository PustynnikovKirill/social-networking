// import {ActionsTypeUsersReducer} from "./store";


export type InitialStateType = {users:Array<UserType>}

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
}



export const usersReducer = (state = initialState, action: ActionsTypeUsersReducer):InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users ]}
        default:
            return state

    }

}
export type ActionsTypeUsersReducer = followACType | unfollowACType | setUsersACType
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