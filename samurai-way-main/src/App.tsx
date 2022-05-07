import React from 'react';
import './App.css';


export const App = () => {
    return (
        <div className='app-wrapper'>
            <header className = 'header'>
                <img src='https://cdn.segodnya.ua/i/image_728x410/media/image/620/23c/d13/62023cd134531.jpg.webp'/>
            </header>
            <nav className='nav'>
                <div>Profile</div>
                <div>Messages</div>
                <div>Profile</div>
                <div>Profile</div>
            </nav>
            <div className= 'content'>Main content</div>
        </div>
    );
}


