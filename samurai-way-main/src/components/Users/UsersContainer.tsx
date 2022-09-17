import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../assets/images/Spinner-1s-200px (2).svg"
import {
    follow,
    InitialStateType,
    setCurrenPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users.reducer";
import {Preloader} from "../common/Preloader/Preloader";


export type MapStateToPropsType = {
    usersPages: InitialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean

}

export type mapDispatchToPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching:(isFetching:boolean)=>void

}
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}& count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
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
        isFetching: state.usersPages.isFetching
    }
}

export default compose<React.FC>(connect(mapStateToProps,  {
    follow, unfollow, setUsers, setCurrenPage, setTotalUsersCount, toggleIsFetching,
}))(UsersContainer)