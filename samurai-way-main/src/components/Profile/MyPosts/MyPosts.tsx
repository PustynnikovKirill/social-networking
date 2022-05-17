import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import { } from "../../../index";
import {ProfilePageType} from "../../../redux/state";

type MyPostsType = {
    postData:ProfilePageType
}

export const MyPosts:React.FC<MyPostsType> = (props) => {


    return (
        <div className={style.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div className={style.post}>
                {props.postData.posts.map(el => {
                    return (
                        <Post id={el.id} message = {el.messages} likes={el.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}