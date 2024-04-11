import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../slices/userSlice";
import { useHttp } from "../hooks/useHttp";
import Spinner from 'react-bootstrap/Spinner';
import '../css/loginPage.scss';
//import { useGetUserQuery } from '../query/userApiSlice';

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { request } = useHttp();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    //const { data: user = {} } = useGetUserQuery("kfc8ucSqWzcwVpoCV9BPvMEEdz33");
    //console.log(user);


    const onLogin = (e) => {
        e.preventDefault();
        setLoading(true)
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                request("http://localhost:3001/api/users")
                    // request("https://test.webmaks.site/api/users")
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
                setLoading(false)
                setError(null)
                navigate("/goods");
            })
            .catch((error) => {
                setError(error.code)
                setLoading(false)
                // errorCode = error.code;
                // const errorMessage = error.message;

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
                {error === "auth/invalid-login-credentials" ? <div className="login__password" style={{ color: "red" }}>Неверный логин или пароль</div> : null}
                <div>
                    <button disabled={loading ? true : false} type="submit">{loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Войти"}</button>
                </div>
            </form>
            <div className="login_redirect">Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></div>
        </div>

    )
}