import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export const Profile = () => {

    let  postData = [
        {id:'1', messages:'Hi, how are you?',likesCount:11},
        {id:'2', messages:"it's my first !" ,likesCount:12}
    ]

    return (
        <div>
            <ProfileInfo/>
           <MyPosts postData = {postData} />
        </div>
    )
}