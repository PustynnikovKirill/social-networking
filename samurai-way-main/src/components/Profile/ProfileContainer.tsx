import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import {setUserProfile} from "../../redux/profile.reducer";

export type stateToPropsProfileType = {
    state:AppRootStateType
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
export type mapDispatchToPropsProfileType = {
    setUserProfile: (profile:ProfileType) => void
}
export type ProfilePropsType = MapStateToPropsType & mapDispatchToPropsProfileType

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

class ProfileContainer extends React.Component<ProfilePropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
              this.props.setUserProfile(response.data)
            })
    }

    render() {
        console.log('this.props', this.props)
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}



let mapStateToProps = (state:AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default compose<React.FC> (connect(mapStateToProps,{setUserProfile})) (ProfileContainer)