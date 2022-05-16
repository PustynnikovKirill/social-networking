import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";


export const MyPosts = () => {

    let  postData = [
        {id:'1', messages:'Hi, how are you?',likesCount:11 },
        {id:'2', messages:"it's my first !" ,likesCount:12}
]
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
                {postData.map(el => {
                    return (
                        <Post message = {el.messages} likes={el.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}