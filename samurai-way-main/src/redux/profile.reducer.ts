import { PostType} from "./store";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";



export type InitialStateType = typeof initialState

// type PostType = {
//     id:string,
//     messages:string,
//     likesCount:string,
// }
// type initialStateType = {
//     posts:Array<PostType>,
//     profile: null | ProfileType,
//     newPostText:string,
// }

const initialState = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 11},
        {id: 2, messages: "it's my first !", likesCount: 12},
    ],
    profile: null as null | ProfileType,
    newPostText: 'it-kamasutra.com',
    status:''


}
export type ActionsType = setUserProfile | updateNewPostTextActionCreatorType | addPostActionCreatorType | setStatusType

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_USERS_PROFILE":{
            return {...state, profile:action.profile}
        }
        case "ADD_POST": {
            const newPost: PostType = {
                id: 3,
                messages: state.newPostText,
                likesCount: 17
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        }
        case "UPDATE_NEW_POST_TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state

    }

}

export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => {
    return {
        type: "ADD_POST"
    } as const
}

type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: text
    } as const
}

export type setUserProfile = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile:ProfileType) => {
    return {
        type: "SET_USERS_PROFILE",
        profile
    }as const
}

export type setStatusType = ReturnType<typeof setStatus>
export const setStatus = (status:string) => {
    return {
        type: "SET_STATUS",
        status
    }as const
}

export const getUserProfile = (userId:number) => (dispatch:Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId:number) => (dispatch:Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status:string) => (dispatch:Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))
            }

        })
}