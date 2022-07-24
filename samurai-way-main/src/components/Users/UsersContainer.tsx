import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users.reducer";
import {AnyAction, Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";

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
    setCurrentPage:(pageNumber:number)=>void,
    setTotalUsersCount:(totalCount:number)=>void
}

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    constructor(props:UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }


    render() {


        return <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.usersPages.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
        />
    }
}

let mapStateToProps = (state:AppRootStateType):MapStateToPropsType => {
    return {
        usersPages:state.usersPages,
        pageSize:state.usersPages.pageSize,
        totalUsersCount:state.usersPages.totalUsersCount,
        currentPage:state.usersPages.currentPage
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
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
//@ts-ignore
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)