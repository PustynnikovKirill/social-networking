import {PostType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state, action) => {
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