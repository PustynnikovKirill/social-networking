import React from 'react';
import style from './ProfileInfo.module.css'
import {ProfileType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile:ProfileType | null,
    status:string,
    updateStatus: (status:string)=>void
}

export const ProfileInfo:React.FC<ProfileInfoType> = (props) => {

    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<img*/}
                {/*    src='https://p4.wallpaperbetter.com/wallpaper/314/22/575/snowboarding-mountains-snow-wallpaper-preview.jpg'/>*/}
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status = {props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
