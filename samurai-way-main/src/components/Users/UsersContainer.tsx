import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {Users} from "./Users";
import {
    follow, getUsersTC,
    InitialStateType,
    setCurrentPage, toggleFollowingProgress, unfollow,
    UserType
} from "../../redux/users.reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";



export type MapStateToPropsType = {
    usersPages: InitialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress:any

}

export type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching:(isFetching:boolean)=>void,
    toggleFollowingProgress:(userId:string,followingInProgress: boolean)=>void,
    getUsersTC:(currentPage:number,pageSize:number)=>void


}
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage,this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber,this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.usersPages.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleIsFetching={this.props.toggleIsFetching}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        usersPages: state.usersPages,
        pageSize: state.usersPages.pageSize,
        totalUsersCount: state.usersPages.totalUsersCount,
        currentPage: state.usersPages.currentPage,
        isFetching: state.usersPages.isFetching,
        followingInProgress:state.usersPages.followingInProgress
    }
}

export default compose<React.FC>(connect(mapStateToProps,  {
    follow,unfollow,
    setCurrentPage,toggleFollowingProgress,
    getUsersTC,


}))(UsersContainer)