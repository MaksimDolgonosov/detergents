import React from 'react';
import './header.scss'

import Logo from '../../images/logo/logo2.svg'
import Enter from '../../images/icons/enter.png'
const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <img src={Logo} className='logo' alt='logo' />
                <nav className='header__nav'>
                    <ul className='header__nav-items'>
                        <li className='header__nav-item'><a href="sdf">О нас</a> </li>
                        <li className='header__nav-item'><a href="sdf">Доставка</a></li>
                        <li className='header__nav-item'><a href="sdf"><img src={Enter} alt='enter_logo'></img> Войти </a></li>
                    </ul>
                </nav>
            </div>

            <div className='presentation'></div>
        </header>
    );
}

export default Header;
