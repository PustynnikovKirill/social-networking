import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppRootStateType, RootStoreType} from "../../redux/redux-store";
import {ProfileType} from "./ProfileContainer";

type ProfilePropsType = {
    profile:ProfileType | null
}

export const Profile:React.FC<ProfilePropsType>  = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}