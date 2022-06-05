import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ProfileType = {
    state:ProfilePageType
    dispatch:(action:ActionsTypes)=>void
}

export const Profile:React.FC<ProfileType>  = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.state} dispatch={props.dispatch}/>
        </div>
    )
}