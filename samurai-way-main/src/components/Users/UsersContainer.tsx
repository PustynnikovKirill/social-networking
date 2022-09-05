import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";



import {
    followAC,
    InitialStateType,
    setCurrenPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users.reducer";


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


export class UsersContainer extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChange = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
    }
    render (){

        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChange={this.onPageChange}
                      users = {this.props.usersPages.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}

        />
    }
}


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
export default compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(UsersContainer)