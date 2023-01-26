import {PostType} from "./store";
import {PhotosType, ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {FormDataProfileType} from "../components/Profile/ProfileInfo/ProfileInfo";
import {AppDispatch} from "./redux-store";
import {FormErrors, stopSubmit} from "redux-form";



export type InitialStateType = typeof initialState

// type PostType = {
//     id:string,
//     messages:string,
//     likesCount:string,
// }
type initialStateType = {
    posts:Array<PostType>,
    profile: ProfileType,
    newPostText:string,
    status: string,
}

const initialState: initialStateType = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 11},
        {id: 2, messages: "it's my first !", likesCount: 12},
    ],
    profile: {
        photos: {
            large: '',
            small: ''
        },
        contacts: {
            facebook: '',
            vk: '',
            twitter: '',
            instagram: '',
            github: '',
        }
    },
    newPostText: 'it-kamasutra.com',
    status: ''

}

export type ActionsType = setUserProfile
    | addPostActionCreatorType
    | setStatusType
    | deletePostType
    | savePhotoSuccessType

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_USERS_PROFILE": {
            return {...state, profile: action.profile}
        }
        case "ADD_POST": {
            const newPost: PostType = {
                id: 3,
                messages: action.newPostText,
                likesCount: 17
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        }

        case "SET_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "DELETE_POST": {
            return {
                ...state, posts: state.posts.filter(el => el.id !== action.postId)
            }
        }
        case "SAVE_PHOTO_SUCCESS": {
            return {
                ...state, profile: {...state.profile, photos:action.photos}
            }
        }
        default:
            return state

    }

}

export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD_POST",
        newPostText
    } as const
}

export type setUserProfile = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET_USERS_PROFILE",
        profile
    } as const
}

export type setStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {
        type: "SET_STATUS",
        status
    } as const
}
export type deletePostType = ReturnType<typeof deletePost>
export const deletePost = (postId: number) => {
    return {
        type: "DELETE_POST",
        postId
    } as const
}
export type savePhotoSuccessType = ReturnType<typeof savePhotoSuccess>
export const savePhotoSuccess = (photos: PhotosType) => {
    return {
        type: "SAVE_PHOTO_SUCCESS",
        photos
    } as const
}


export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))

}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }

}
export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }

}
export const saveProfile = (profile: FormDataProfileType) => async (dispatch: AppDispatch, getState:any) => {
    const userId = getState().auth.id
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        // @ts-ignore
        dispatch(stopSubmit('edit-profile', {_error: message}))
        // dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
    }

}