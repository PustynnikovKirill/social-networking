import { PostType} from "./store";
import {ProfileType} from "../components/Profile/ProfileContainer";



export type InitialStateType = typeof initialState

const initialState = {
    posts: [
        {id: '1', messages: 'Hi, how are you?', likesCount: 11},
        {id: '2', messages: "it's my first !", likesCount: 12},
    ],
    profile: null as null | ProfileType,
    newPostText: 'it-kamasutra.com',


}
export type ActionsType = setUserProfile | updateNewPostTextActionCreatorType | addPostActionCreatorType

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_USERS_PROFILE":{
            return {...state, profile:action.profile}
        }
        case "ADD_POST": {
            const newPost: PostType = {
                id: '3',
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