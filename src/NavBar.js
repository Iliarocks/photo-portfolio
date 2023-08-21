import React, {useState} from 'react';
import instagramIcon from './resources/icons/instagram.svg';
import youtubeIcon from './resources/icons/youtube.svg';

export default function NavBar({ goToPage }) {
    const [navBarStatus, setNavBarStatus] = useState(false);

    function handleClick() {
        setNavBarStatus(!navBarStatus);
    }

    return (
        <div id='navigation'>
            <header id='desktop-header'>
                <h1 onClick={ () => goToPage('/') }>ILIA PARUNASHVILI</h1>
            </header>
            <header id='mobile-header'>
                <h1 onClick={ () => goToPage('/') }>ILIA PARUNASHVILI</h1>
                <span onClick={ handleClick } className="material-symbols-outlined">menu</span>
            </header>
            <nav className={ navBarStatus ? 'navbar-active' : null }>
                <a onClick={ () => goToPage('/photos') }>Photos</a>
                <a onClick={ () => goToPage('/films') }>Films</a>
                <a onClick={ () => goToPage('/gear') }>Gear</a>
                <ul>
                    <a href='https://youtube.com/@iliaparun'><img className='social-icons' src={ youtubeIcon }/></a>
                    <a href='https://www.instagram.com/ilia.photos'><img className='social-icons' src={ instagramIcon }/></a>
                </ul>
            </nav>
        </div>
    )
}