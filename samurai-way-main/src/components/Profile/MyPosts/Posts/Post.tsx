import React from 'react';
import style from './Post.module.css'

export type PostType = {
    id: string
    message: string
    likes:number
}

export const Post = (props:PostType) => {
    return (
        <div className={style.item}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU'}/>
            {props.message}
            <div>
                <span>like</span> {props.likes}
            </div>
        </div>

    )
}