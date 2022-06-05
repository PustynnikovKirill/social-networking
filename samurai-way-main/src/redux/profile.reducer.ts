import {ActionsTypes, PostType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
        posts: [
            {id: '1', messages: 'Hi, how are you?', likesCount: 11},
            {id: '2', messages: "it's my first !", likesCount: 12},
        ],
        newPostText: 'it-kamasutra.com'

    }

export const profileReducer = (state = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: '3',
                messages: state.newPostText,
                likesCount: 17
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state

    }

}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}