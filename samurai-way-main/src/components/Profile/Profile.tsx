import React from 'react';
import {FormDataProfileType, ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";

type ProfilePropsType = {
    profile:ProfileType | null,
    status:string,
    updateStatus: (status:string)=>void,
    isOwner:boolean,
    savePhoto:(file:any)=>void,
    saveProfile:(formData: FormDataProfileType)=>void
}

export const Profile:React.FC<ProfilePropsType>  = (props) => {
    // @ts-ignore
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status = {props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile ={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}