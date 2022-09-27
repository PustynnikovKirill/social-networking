import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import {setUserProfile} from "../../redux/profile.reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
export type mapDispatchToPropsProfileType = {
    setUserProfile: (profile:ProfileType) => void
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
	userId: string;
	photos: {
        small: string;
        large: string;
    };
}

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
      let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
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

// @ts-ignore
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default compose<React.FC> (connect(mapStateToProps,{setUserProfile})) (WithUrlDataContainerComponent)