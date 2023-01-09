import React, {useState} from 'react';
import style from './ProfileInfo.module.css'
import {ContactsType, ProfileType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

type ProfileInfoType = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({savePhoto, ...props}) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => {
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

                {editMode ?
                    <ProfileDataForm profile={props.profile}/> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

type ProfileDataType = {
    profile: ProfileType | null,
    isOwner: boolean,
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {profile && <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name</b>:{profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>:{profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>:{profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>:{profile.aboutMe ? "yes" : "no"}
            </div>
            <div>
                <b>Contacts</b>:{

                (Object.keys(profile.contacts) as (keyof ContactsType)[]).map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })

            }
            </div>
        </div>}

    </div>
}

// type ProfileDataFormType = {
//     profile: ProfileType | null,
// }
// const ProfileDataForm: React.FC<ProfileDataFormType> = ({profile}) => {
//     return <div>
//         {profile && <div>
//             Form
//         </div>}
//
//     </div>
// }

type ContactType = {
    contactTitle: string,
    contactValue: string
}

const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={style.contact}><b>{contactTitle}</b>:{contactValue}</div>
}