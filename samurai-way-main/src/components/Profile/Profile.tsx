import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    state:ProfilePageType
}

export const Profile:React.FC<ProfileType>  = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.state}/>
        </div>
    )
}