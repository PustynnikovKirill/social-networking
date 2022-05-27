import React, {FC} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {} from "../../../index";
import {ActionsTypes, ProfilePageType} from "../../../redux/state";

type MyPostsType = {
    postData: ProfilePageType
    updateNewPostText:(newText:string)=>void
    dispatch:(action:ActionsTypes)=>void
}

export const MyPosts: FC<MyPostsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
            props.dispatch({type:'ADD-POST'})


    }
    const onPostElement = () => {
        if (newPostElement.current) {
            props.dispatch({type:'UPDATE-NEW-POST-TEXT',newText:newPostElement.current.value})
        }
    }

    return (
        <div className={style.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostElement} value={props.postData.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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