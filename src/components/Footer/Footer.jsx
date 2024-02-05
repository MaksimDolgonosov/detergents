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
            {/* <a className='footer__link' href="http://webmaks.site">&copy; {date} powered by webmaks</a> */}

          <div className='footer__req'>{date} © ЧУП "Делиз Плюс". Использование материалов сайта только с разрешения владельца. УНП 791020548 Зарегистрирован в торговом реестре №00000 от 00.00.2000г Св-во о госрегистрации №00000000 от 00.00.2010. Зарегистрировано Администрацией Октябрьского района г.Могилева</div>  

            <div className='footer__descr'>
                <Link className='footer__descr-link'>О нас</Link>
                <Link className='footer__descr-link'>Политика конфиденциальности</Link>
                <Link className='footer__descr-link'>Контакты</Link>
            </div>
        </footer >
    );
}

export default Footer;
