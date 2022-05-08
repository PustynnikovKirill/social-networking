import React from 'react';
import style from './MyPosts.module.css'


export const MyPosts = () => {
    return (
        <div >
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.item}>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU'} />
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    )
}