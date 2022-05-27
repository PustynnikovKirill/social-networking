import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfileType = {
    state:ProfilePageType
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
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