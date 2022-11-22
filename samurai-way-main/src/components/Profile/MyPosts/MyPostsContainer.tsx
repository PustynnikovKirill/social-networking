import React from 'react';
import {} from "../../../index";
import {addPostActionCreator} from "../../../redux/profile.reducer";
import {AppRootStateType,} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";


const mapStateToProps = (state:AppRootStateType) => {
    return {
        postData:state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:any)=> {
    return {
        addPost:(newPostText:string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}


export const MyPostsContainer = compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(MyPosts)