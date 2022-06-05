import React, {FC} from 'react';
import {} from "../../../index";
import {
    ActionsTypes,
    ProfilePageType,
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile.reducer";
import {AppRootStateType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

type MyPostsType = {
    store:any
}



export const MyPostsContainer: FC<MyPostsType> = (props) => {

    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text:string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
       <MyPosts updateNewPostText={onPostChange} addPost={addPost} postData={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
    )
}