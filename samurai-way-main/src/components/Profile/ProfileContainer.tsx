import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profile.reducer";


type PathParamsType = {
    userId: any
}

type MapStateToPropsType = {
    profile: ProfileType | null,
    status: string,
    authorizedUserId: number | null,
    isAuth: boolean

}

export type mapDispatchToPropsProfileType = {
    getUserProfile: (profile: ProfileType) => void,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
    savePhoto:(e:any)=>void
}
export type PhotosType = {
    small: string;
    large: string;
}
export type ProfilePropsType = MapStateToPropsType & mapDispatchToPropsProfileType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export type ProfileType = {
    aboutMe?: string;
    contacts?: {
        facebook: string;
        vk: string;
        twitter: string;
        instagram: string;
        github: string;
    };
    lookingForAJob?: boolean;
    lookingForAJobDescription?: string;
    fullName?: string;
    userId?: number;
    photos: PhotosType
}

class ProfileContainer extends React.Component<PropsType> {


    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {

        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}

                />
            </div>
        )
    }
}


let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})


export default compose<React.FC>(connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto
}), withRouter)(ProfileContainer)