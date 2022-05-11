import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://p4.wallpaperbetter.com/wallpaper/314/22/575/snowboarding-mountains-snow-wallpaper-preview.jpg'/>
            </div>
            <div>
                ava + description
            </div>
           <MyPosts/>
        </div>
    )
}