import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../slices/userSlice";
import { useHttp } from "../hooks/useHttp";
import '../css/loginPage.scss';
//import { useGetUserQuery } from '../query/userApiSlice';

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { request } = useHttp();

    //const { data: user = {} } = useGetUserQuery("kfc8ucSqWzcwVpoCV9BPvMEEdz33");
    //console.log(user);
    const onLogin = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                request("http://localhost:3001/api/users")
                    .then(data => data.filter(serverUser => serverUser.id === user.uid))
                    .then(data => dispatch(setUser({
                        name: data[0].name,
                        surname: data[0].surname,
                        tel: data[0].tel,
                        email: user.email,
                        id: user.uid,
                        status: data[0].status,
                        basket: data[0].basket,
                        history: data[0].history
                    })))
                // localStorage.setItem("userId", user.uid);
                navigate("/goods");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className="login_page">
            <h2>Войти</h2>
            <h3>Что бы продолжить</h3>
            <form className="form" onSubmit={onLogin} >

                <div className="login__login">Логин</div>
                <input name="email" type="email" placeholder='Ваш email' value={email} onChange={e => setEmail(e.target.value)} />

                <div className="login__password">Пароль</div>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <div>
                    <button type="submit">Войти</button>
                </div>
            </form>
            <div className="login_redirect">Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></div>
        </div>

    )
}