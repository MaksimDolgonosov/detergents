import { Link } from 'react-router-dom';
import '../css/loginPage.scss';

export const LoginPage = () => {
    return (
        <div className="login_page">
            <h2>Войти</h2>
            <h3>Что бы продолжить</h3>
            <form>
                <label>
                    <div className="login__login">Логин</div>
                    <input type="text" placeholder='Ваш email' />
                </label>
                <label>
                    <div className="login__password">Пароль</div>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Войти</button>
                </div>
            </form>
            <div className="login_redirect">Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></div>
        </div>
      
    )
}