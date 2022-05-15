import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";


export const MyPosts = () => {
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
                <Post message='Hi, how are you?' likes={0}/>
                <Post message="it's my first !" likes={23}/>
            </div>
        </div>
    )
}