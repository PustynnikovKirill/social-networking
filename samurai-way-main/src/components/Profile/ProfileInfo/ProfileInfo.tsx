import React from 'react';
import style from './ProfileInfo.module.css'
import {ProfileType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

type ProfileInfoType = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto:(file:any)=>void
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({savePhoto,...props}) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e:any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            {/*<div>*/}
            {/*    /!*<img*!/*/}
            {/*    /!*    src='https://p4.wallpaperbetter.com/wallpaper/314/22/575/snowboarding-mountains-snow-wallpaper-preview.jpg'/>*!/*/}
            {/*</div>*/}
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={style.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
