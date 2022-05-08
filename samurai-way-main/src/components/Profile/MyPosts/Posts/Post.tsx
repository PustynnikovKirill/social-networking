import React from 'react';
import style from './Post.module.css'


export const Post = () => {
    return (
        <div className={style.item}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU'}/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>

    )
}