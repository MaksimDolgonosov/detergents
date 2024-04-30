import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../slices/userSlice";
import Spinner from 'react-bootstrap/Spinner';
import '../css/loginPage.scss';
import { useLazyGetUserQuery } from '../query/userApiSlice';

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [getUser] = useLazyGetUserQuery();


    const onLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                const userSql = await getUser(user.uid);
                console.log(userSql)
                dispatch(setUser({
                    name: userSql.data.name,
                    surname: userSql.data.surname,
                    tel: userSql.data.tel,
                    email: user.email,
                    id: user.uid,
                    status: userSql.data.status,
                    basket: userSql.data.basket,
                    history: userSql.data.history
                }))
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