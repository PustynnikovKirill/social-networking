import React, {FC} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {} from "../../../index";
import {
    ActionsTypes,
    ProfilePageType,
} from "../../../redux/store";
import {InitialStateType} from "../../../redux/profile.reducer";

type MyPostsType = {
    postData: InitialStateType
    updateNewPostText:(text:string)=>void
    addPost:()=>void
    newPostText:string
}



export const MyPosts: FC<MyPostsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost = () => {
        props.addPost();
        //props.dispatch(addPostActionCreator())

    }
    const onPostElement = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)

        }
    }
    return (
        <div className={style.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
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