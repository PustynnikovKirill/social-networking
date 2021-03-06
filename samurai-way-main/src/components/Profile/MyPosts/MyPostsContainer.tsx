import React from 'react';
import {} from "../../../index";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile.reducer";
import {AppRootStateType,} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state:AppRootStateType) => {
    return{
        postData:state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:any)=> {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)