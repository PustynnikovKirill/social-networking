import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";


export type PposDataType = {
    id:string,
    messages:string
    likesCount:number
}
export type  PropsPost = {
    postData:Array<PposDataType>
}
export const MyPosts = (props: PropsPost) => {


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
                {props.postData.map(el => {
                    return (
                        <Post message = {el.messages} likes={el.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}