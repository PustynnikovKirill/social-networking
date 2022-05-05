import React from 'react';
import './App.css';

export const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1472043884_02.jpg"/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
                <div>Message</div>
            </nav>
            <div className={'content'}>
                <div>
            <img src={"https://mirpozitiva.ru/wp-content/uploads/2019/11/1472043884_02.jpg"}/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}


