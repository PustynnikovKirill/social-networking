import React from 'react';
import style from './ProfileInfo.module.css'



export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://p4.wallpaperbetter.com/wallpaper/314/22/575/snowboarding-mountains-snow-wallpaper-preview.jpg'/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
