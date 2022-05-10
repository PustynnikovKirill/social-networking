import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";


export const MyPosts = () => {
    return (
        <div>
            <div>
 ё               My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.post}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}