import {AppRootStateType} from "./redux-store";

export const getUsersPage=(state:AppRootStateType)=>{
    return state.usersPages.users
}

export const getPageSize=(state:AppRootStateType)=>{
    return state.usersPages.pageSize
}
export const getTotalUsersCount=(state:AppRootStateType)=>{
    return state.usersPages.totalUsersCount
}
export const getCurrentPage=(state:AppRootStateType)=>{
    return state.usersPages.currentPage
}
export const getIsFetching=(state:AppRootStateType)=>{
    return state.usersPages.isFetching
}
export const getFollowingInProgress=(state:AppRootStateType)=>{
    return state.usersPages.followingInProgress
}