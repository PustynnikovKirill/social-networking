import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followAC,
    InitialStateType,
    setCurrenPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users.reducer";
import {compose, Dispatch} from "redux";

export type MapStateToPropsType = {
    usersPages:InitialStateType,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number

}

export type mapDispatchToPropsType = {
    follow:(userId:string)=>void,
    unfollow:(userId:string)=>void,
    setUsers:(users:Array<UserType>)=>void,
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppRootStateType):MapStateToPropsType => {
    return {
        usersPages:state.usersPages,
        pageSize: state.usersPages.pageSize,
        totalUsersCount: state.usersPages.totalUsersCount,
        currentPage: state.usersPages.currentPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userId:string)=> {
            dispatch(followAC(userId));
        },
        unfollow: (userId:string)=> {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users:Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch (setCurrenPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount:number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
export default compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(Users)