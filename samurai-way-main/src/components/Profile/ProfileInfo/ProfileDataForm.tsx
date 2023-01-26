import React, {ComponentType, WeakValidationMap} from "react";
import {ContactsType, ProfileType} from "../ProfileContainer";
import {createField, Input, Textarea} from "../../common/Preloader/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../common/Preloader/FormsControls/FormControls.module.css";


type ProfileDataFormType = {
    profile: ProfileType | null,
    initialValues: any
}
export type ProfileFormType={
    userId: string,
    lookingForAJob: string,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: string,
    github?: string,
    vk?: string,
    facebook?: string,
    instagram?: string,
    twitter?: string,
    website?: string,
    youtube?: string,
    mainLink?: string,
}
 const ProfileDataForm: React.FC<ProfileDataFormType & InjectedFormProps<ProfileFormType, ProfileDataFormType>> = ({profile, handleSubmit,error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
        </div>
        <div>
            <b>Full name</b>:{createField(
            "Full name",
            "fullName",
            [],
            Input, null, ''
        )}
        </div>
        <div>
            <b>Looking for a job</b>:{createField(
            "",
            "lookingForAJob",
            [],
            Input, {type: "checkbox"},
            ''
        )}
        </div>
        <div>
            <b>My professional skills</b>: {createField(
                "My professional skills",
                "lookingForAJobDescription",
                [],
                Textarea, '',
                ''
            )}
        </div>

        <div>
            <b>About me</b>: {createField(
                "About me",
                "aboutMe",
                [],
                Textarea, '',
                ''
            )}
        </div>
        <div>
            <b>Contacts</b>:{
            (Object.keys(profile ? profile.contacts : '') as (keyof ContactsType)[]).map((key) => {
                return(
                    <div key={key} className={style.contact}>
                        <b>{key}:{createField(
                            key,
                            "contacts." + key,
                            [],
                            Input, null, ''
                        )}</b>
                    </div>
                )
            })
        }
        </div>
    </form>
}


const ProfileDataFormReduxForm = reduxForm<ProfileFormType, ProfileDataFormType>({
    form: 'edit-profile'
})(ProfileDataForm)


export default ProfileDataFormReduxForm
