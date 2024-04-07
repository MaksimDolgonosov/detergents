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

            {/* <div className="footer__background">
                <svg

                    x="0px"
                    y="0px"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1600 900"
                >
                    <defs>
                        <path
                            id="wave"
                            fill="rgba(105, 27, 252, 0.6)"
                            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
      s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                        />
                    </defs>
                    <g>
                        <use xlinkHref="#wave" opacity=".4">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="8s"
                                calcMode="spline"
                                values="270 230; -334 180; 270 230"
                                keyTimes="0; .5; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                        <use xlinkHref="#wave" opacity=".6">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="6s"
                                calcMode="spline"
                                values="-270 230;243 220;-270 230"
                                keyTimes="0; .6; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                        <use xlinkHref="#wave" opacty=".9">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="4s"
                                calcMode="spline"
                                values="0 230;-140 200;0 230"
                                keyTimes="0; .4; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                    </g>
                </svg>
            </div> */}
            <section>
                <div className='footer__req'>{date} © ЧУП "Делиз Плюс". Использование материалов сайта только с разрешения владельца. УНП 791020548 Зарегистрирован в торговом реестре №00000 от 00.00.2000г Св-во о госрегистрации №00000000 от 00.00.2010. Зарегистрировано Администрацией Октябрьского района г.Могилева</div>

                <div className='footer__descr'>
                    <Link className='footer__descr-link'>О нас</Link>
                    <Link className='footer__descr-link'>Политика конфиденциальности</Link>
                    <Link className='footer__descr-link'>Контакты</Link>
                </div>
            </section>

        </footer >
    );
}

export default Footer;
