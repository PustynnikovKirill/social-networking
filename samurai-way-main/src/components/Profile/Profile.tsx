import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";

type ProfilePropsType = {
    profile:ProfileType | null,
    status:string,
    updateStatus: (status:string)=>void
}

export const Profile:React.FC<ProfilePropsType>  = (props) => {
    // @ts-ignore
    return (
        <div>
            <ProfileInfo profile={props.profile} status = {props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}