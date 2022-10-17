import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profile.reducer";


type PathParamsType = {
    userId: any
}

type MapStateToPropsType = {
    profile: ProfileType | null,

}

export type mapDispatchToPropsProfileType = {
    getUserProfile: (profile:ProfileType) => void
}

export type ProfilePropsType = MapStateToPropsType & mapDispatchToPropsProfileType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export type ProfileType = {
	aboutMe: string;
	contacts: {
        facebook: string;
        vk: string;
        twitter: string;
        instagram: string;
        github: string;
    };
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	userId: number;
	photos: {
        small: string;
        large: string;
    };
}

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
      let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state:AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})


export default compose<React.FC> (connect(mapStateToProps,{getUserProfile}), withRouter) (ProfileContainer)