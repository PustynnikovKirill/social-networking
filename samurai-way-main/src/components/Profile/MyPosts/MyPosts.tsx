import React, {FC} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {} from "../../../index";
import {InitialStateType} from "../../../redux/profile.reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsType = {
    postData: InitialStateType
    addPost:(newPostText:string)=>void
}
type PostProfileType = {
    newPostText:string
}

export const PostForm:React.FC<InjectedFormProps<PostProfileType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostForm = reduxForm<PostProfileType>({form:"Profile"})(PostForm)


export const MyPosts: FC<MyPostsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost = (values:PostProfileType) => {
        props.addPost(values.newPostText);
        //props.dispatch(addPostActionCreator())

    }
    return (
        <div className={style.postsBlock}>
            <div>
                <h3>My posts</h3>
                <AddNewPostForm onSubmit = {onAddPost} />
            </div>
            <div className={style.post}>
                {props.postData.posts.map(el => {
                    return (
                        <Post id={el.id} message={el.messages} likes={el.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}


