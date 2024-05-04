import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../slices/userSlice";
import { useAddUserMutation } from "../query/userApiSlice";
import Spinner from 'react-bootstrap/Spinner';
import '../css/registerPage.scss';


export const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updateUsers] = useAddUserMutation();
    const [loading, setLoading] = useState(false);

    const onRegister = async (event) => {
        event.preventDefault();
        setLoading(true)
        const auth = await getAuth();
        createUserWithEmailAndPassword(auth, email, password)

            .then(({ user }) => {
                const newUser = {
                    name: name,
                    surname: "",
                    tel: "",
                    email: user.email,
                    id: user.uid,
                    status: "customer",
                    basket: [],
                    history: []
                }
                dispatch(setUser(newUser));
                updateUsers(newUser).unwrap();
                setLoading(false)
                // localStorage.setItem("userId", user.uid);
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

            <form className="form" onSubmit={onRegister}>
                <div className="register__name">Ваше имя</div>
                <input type="text" name="name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />


                <div className="register__login">Ваш email</div>
                <input type="text" name="email" autoComplete="off" placeholder='Ваш email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <div className="register__password">Пароль</div>
                <input type="password" name="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />

                <div>
                    <button disabled={loading ? true : false} type="submit">{loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Зарегистрироваться"}</button>
                </div>

                <div className="login_redirect">Уже зарегистрированы? <Link to="/login">Войти</Link></div>
            </form>
        </div>
    )

}