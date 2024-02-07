import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../slices/userSlice";
import '../css/registerPage.scss';

export const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onRegister = (email, password) => {
        // event.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)

            .then(({ user }) => {
                dispatch(setUser({
                    name: name,
                    email: user.email,
                    id: user.uid,
                    status: "customer",
                    basket:[],
                    history: []
                }));
                navigate("/goods");
            })
            .catch((error) => {
                console.log(error)
                // ..
            });
    }

    return (
        <div className="register_page">
            <h2>Зарегистрируйтесь</h2>
            <h3>Что бы продолжить</h3>

            <div className="form">
                <div className="register__name">Ваше имя</div>
                <input type="text" name="name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />


                <div className="register__login">Ваш email</div>
                <input type="text" name="email" autoComplete="off" placeholder='Ваш email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <div className="register__password">Пароль</div>
                <input type="password" name="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />

                <div>
                    <button onClick={() => onRegister(email, password)}>Зарегистрироваться</button>
                </div>

                <div className="login_redirect">Уже зарегистрированы? <Link to="/login">Войти</Link></div>
            </div>
        </div>
    )

}