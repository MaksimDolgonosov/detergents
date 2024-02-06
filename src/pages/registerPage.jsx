import { Link } from "react-router-dom";
import { useState } from "react";
import '../css/registerPage.scss';

export const RegisterPage = () => {
const [name, setName] = useState("");
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");



    return (
        <div className="register_page">
            <h2>Зарегистрируйтесь</h2>
            <h3>Что бы продолжить</h3>
            <form>
                <label>
                    <div className="register__name">Ваше имя</div>
                    <input type="text" value={name} onChange={setName}/>
                </label>
                <label>
                    <div className="register__login">Ваш email</div>
                    <input type="text" placeholder='Ваш email' value={email} onChange={setEmail}/>
                </label>
                <label>
                    <div className="register__password">Пароль</div>
                    <input type="password" value={password} onChange={setPassword}/>
                </label>
                <div>
                    <button type="submit">Зарегистрироваться</button>
                </div>
            </form>
            <div className="login_redirect">Уже зарегистрированы? <Link to="/login">Войти</Link></div>
        </div>

    )

}