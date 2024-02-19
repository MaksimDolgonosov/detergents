import { useSelector } from 'react-redux';
import '../css/mainPage.scss';
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { useEffect } from 'react';

export const MainPage = () => {
    const { isAuth } = useSelector(state => state.user);
    const { name } = useSelector(state => state.user)
   // const navigate = useNavigate();

    // useEffect(() => {
    //     if (isAuth) {
    //         navigate("/goods");
    //     }
    // }, []);

    return (
        <main className="main">
            <div className='main__presentation'></div>
            <div className='main__descr'>
                <p>{isAuth ? `${name}, добро` : `Добро`} пожаловать в интернет-магазин бытовой химии. Здесь вы можете найти интересующие вас <Link to="/goods">товары</Link> и мы доставим их в любую точку Республики Беларусь. Подробнее о доставке вы можете прочитать в <Link>соответствующем разделе</Link>. </p>
                {isAuth ? null : <p> Для начала работы вам необходимо <Link to="/login">войти</Link> или <Link to="/register">зарегистрироваться</Link>.</p>}
                <p>  Желаем вам приятных покупок!</p>
            </div>
        </main>
    )


}