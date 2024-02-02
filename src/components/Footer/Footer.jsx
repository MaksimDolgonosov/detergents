import React from 'react';
import './footer.scss';

import { useMemo } from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    const date = new Date().getFullYear();
    // const date = useMemo(()=>{
    //     new Date().getFullYear()
    // },[]);

    console.log(date)
    return (
        <footer className='footer bg-body-tertiary'>
            <a className='footer__link' href="http://webmaks.site">&copy; {date} powered by webmaks</a>
            <div className='footer__descr'>
                <Link className='footer__descr-link'>О нас</Link>
                <Link className='footer__descr-link'>Политика конфиденциальности</Link>
                <Link className='footer__descr-link'>Контакты</Link>
            </div>
        </footer >
    );
}

export default Footer;
