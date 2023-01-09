import React, {ComponentType, WeakValidationMap} from "react";
import {ContactsType, ProfileType} from "../ProfileContainer";
import {createField, Input, Textarea} from "../../common/Preloader/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";


type ProfileDataFormType = {
    profile: ProfileType | null,
}

 const ProfileDataForm: React.FC<ProfileDataFormType & InjectedFormProps<{}, ProfileDataFormType>> = ({profile}) => {
    return <form>
        <div>
            <button onClick={() => {
            }}>save
            </button>
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
                // return(
                //     <Contact key={key} contactTitle={key} contactValue={profile && profile.contacts[key]}/>
                // )
            })
        }
        </div>
    </form>
}


const ProfileDataFormReduxForm = reduxForm<{}, ProfileDataFormType>({
    form: 'edit-profile'
})(ProfileDataForm)


export default ProfileDataFormReduxForm
