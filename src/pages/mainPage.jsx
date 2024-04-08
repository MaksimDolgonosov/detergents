import { useSelector } from 'react-redux';
import '../css/mainPage.scss';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import main1 from "../images/sm3_full2.jpg"
import main2 from "../images/slider/9.jpg"
import main3 from "../images/sm3_full2.jpg"
import main4 from "../images/sm3_full2.jpg"
import main5 from "../images/sm3_full2.jpg"
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
            {/* <div className='main__presentation'></div> */}
            <Carousel>
                <Carousel.Item>
                    <img className="main__img" src={main1} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="main__img" src={main2} alt="First slide"/>
                </Carousel.Item>

            </Carousel>
            <div className='main__descr'>
                <p>{isAuth ? `${name}, добро` : `Добро`} пожаловать в интернет-магазин бытовой химии. Здесь вы можете найти интересующие вас <Link to="/goods">товары</Link> и мы доставим их в любую точку Республики Беларусь. Подробнее о доставке вы можете прочитать в <Link>соответствующем разделе</Link>. </p>
                {isAuth ? null : <p> Для начала работы вам необходимо <Link to="/login">войти</Link> или <Link to="/register">зарегистрироваться</Link>.</p>}
                <p>  Желаем вам приятных покупок!</p>
            </div>
        </main>
    )




}

const Main1 = () => {
    return (
        <img src={main1} alt="first slide" />
    )
}
const Main2 = () => {
    return (
        <img src={main2} alt="second slide" />
    )
}
const Main3 = () => {
    return (
        <img src={main3} alt="third slide" />
    )
}
const Main4 = () => {
    return (
        <img src={main4} alt="fourth slide" />
    )
}
const Main5 = () => {
    return (
        <img src={main5} alt="fifth slide" />
    )
}