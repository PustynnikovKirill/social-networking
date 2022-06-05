import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppRootStateType} from "../../redux/redux-store";

type ProfileType = {
    store:any
}

export const Profile:React.FC<ProfileType>  = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}