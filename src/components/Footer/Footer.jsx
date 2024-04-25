import React from 'react';
import './footer.scss';

import { Link } from "react-router-dom";


const Footer = () => {
    const date = new Date().getFullYear();
    // const date = useMemo(()=>{
    //     new Date().getFullYear()
    // },[]);

    return (
        <footer className='footer'>
            {/* <a className='footer__link' href="http://webmaks.site">&copy; {date} powered by webmaks</a> */}


            <section>
                <div className='footer__req'>{date} © ЧУП "Делиз Плюс". Использование материалов сайта только с разрешения владельца. УНП 791020548 Зарегистрирован в торговом реестре №00000 от 00.00.2000г Св-во о госрегистрации №00000000 от 00.00.2010. Зарегистрировано Администрацией Октябрьского района г.Могилева<br /><br />
                    <a className='footer__link' target="_blank" rel="noopener noreferrer" href="http://webmaks.site">&copy; {date} powered by webmaks</a></div>

                <div className='footer__descr'>
                    {/* <Link to="" className='footer__descr-link'>О нас</Link> */}
                    <Link to="/policy" className='footer__descr-link'>Политика конфиденциальности</Link>
                    <Link to="/contacts" className='footer__descr-link'>Контакты</Link>
                    {/* <Link to="https://webmaks.site/" className='footer__descr-link'>Разработка</Link> */}
                </div>
            </section>

        </footer >
    );
}

export default Footer;
