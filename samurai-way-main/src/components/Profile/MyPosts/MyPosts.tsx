import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";


export const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.post}>
                <Post message = 'Hi, how are you?' likes={0}/>
                <Post message = "it's my first !"  likes={23}/>
            </div>
        </div>
    )
}