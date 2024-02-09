import '../css/mainPage.scss';

import { Link } from 'react-router-dom';

export const MainPage = () => {
    return (
        <main className="main">
            <div className='main__presentation'></div>
            <div className='main__descr'>
                <p>Добро пожаловать в интернет-магазин бытовой химии. Здесь вы можете найти интересующие вас <Link to="/goods">товары</Link> и мы доставим их в любую точку Республики Беларусь. Подробнее о доставке вы можете прочитать в <Link>соответствующем разделе</Link>. </p>
                <p> Для начала работы вам необходимо <Link to="/login">войти</Link> или <Link to="/register">зарегистрироваться</Link>.</p>
                <p>  Желаем вам приятных покупок!</p>
            </div>
        </main>
    )


}