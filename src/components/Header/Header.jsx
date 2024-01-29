import React from 'react';
import './header.scss'

import Logo from '../../images/logo/logo2.svg'
const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <img src={Logo} className='logo' alt='logo'/>
            </div>
            <div className='presentation'></div>
        </header>
    );
}

export default Header;
