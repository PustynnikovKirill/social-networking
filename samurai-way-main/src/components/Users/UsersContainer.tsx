import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users.reducer";
import {Dispatch} from "redux";

export type MapStateToPropsType = {
    usersPages:InitialStateType
}

export type mapDispatchToPropsType = {
    follow:(userId:string)=>void,
    unfollow:(userId:string)=>void,
    setUsers:(users:Array<UserType>)=>void
}
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppRootStateType):MapStateToPropsType => {
    return {
        usersPages:state.usersPages
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)