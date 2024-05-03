import '../css/orderPage.scss';

import { useSelector } from "react-redux"
import InputMask from 'react-input-mask';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAddHistoryMutation, useLazyGetUserQuery } from "../query/userApiSlice";
import { useAddBasketMutation, useClearBasketMutation } from '../query/basketApiSlice';
import { clearBasket } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { Modal } from '../components/modal/modal';
import Spinner from 'react-bootstrap/Spinner';



export function OrderPage() {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.id);
    const delivery = useSelector(state => state.user.delivery);
    const name = useSelector(state => state.user.name);
    const surname = useSelector(state => state.user.surname);
    const tel = useSelector(state => state.user.tel);
    const basket = useSelector(state => state.user.basket);
    const totalPrice = basket.reduce(((sum, current) => sum + current.price * current.quantity), 0).toFixed(2);
    const basketList = basket.map(item => `${item.title}, ${item.quantity}шт.`)
    const navigate = useNavigate();
    // const { data: user = { history: [] } } = useGetUserQuery(userId);
    // const userHistory = user.history;
    const [updateHistory] = useAddHistoryMutation();
    const [updateBasket] = useAddBasketMutation();
    const [setUserId] = useLazyGetUserQuery();
    const [clearBasketQuery] = useClearBasketMutation();

    // const date = new Date()
    // console.log(date.getDate(), date.getMonth() + 1, date.getFullYear());
    // console.log(`${new Date().getSeconds()}-${new Date().getMonth()}-${new Date().getMinutes()}`)
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [orderName, setOrderName] = useState(name);
    // const [orderSurname, setOrderSurname] = useState(surname === null ? undefined : surname);
    const [orderSurname, setOrderSurname] = useState(surname);
    const [orderTel, setOrderTel] = useState(tel);
    const [orderAddress, setOrderAddress] = useState('');
    const [orderPostNumber, setOrderPostNumber] = useState('');

    function addZero(number) {
        if (number > 9) {
            return number.toString();
        } else {
            return "0" + number;
        }
    }


    const onSubmitOrder = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (delivery === "9") {
            // await fetch('https://node.webmaks.site/api/sendEmail', {
            fetch('http://localhost:3001/api/sendEmail', {
                method: "POST", headers: {
                    // значение этого заголовка обычно ставится автоматически,
                    // в зависимости от тела запроса
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ delivery: true, orderName, orderSurname, orderTel, orderPostNumber, totalPrice, basketList })
                // body: `Заказ для ${orderName} ${orderSurname}, тел: ${orderTel}, в отделение Европочты №${orderPostNumber} на сумму ${totalPrice}руб. + 9руб. за доставку, товары: ${basketList}` 
            })
                .then(res => res.json())
                .then(res => console.log(res))

            console.log(`Заказ для ${orderName} ${orderSurname}, тел: ${orderTel}, в отделение Европочты №${orderPostNumber} на сумму ${totalPrice}руб. + 9руб. за доставку, товары: ${basketList}`);

        } else {
            // await fetch('https://node.webmaks.site/api/sendEmail', {
            fetch('http://localhost:3001/api/sendEmail', {
                method: "POST", headers: {
                    // значение этого заголовка обычно ставится автоматически,
                    // в зависимости от тела запроса
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ delivery: false, orderName, orderTel, orderAddress, totalPrice, basketList })
                // body: `Заказ для ${orderName}, тел: ${orderTel}, по адресу: ${orderAddress} на сумму ${totalPrice}руб., товары: ${basketList}`
            })
                .then(res => res.json())
                .then(res => console.log(res))

            console.log(`Заказ для ${orderName}, тел: ${orderTel}, по адресу: ${orderAddress} на сумму ${totalPrice}руб., товары: ${basketList}`);

        }


        const date = new Date();
        const stringDate = `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.` + date.getFullYear();
        console.log("delivered")
        const user = await setUserId(userId);
        console.log(user)
        const currentHistory = await user.data.history.slice();

        const id = await `${new Date().getSeconds()}-${new Date().getMonth()}-${new Date().getMinutes()}`;
        await currentHistory.push({ id, order: basketList, date: stringDate });
        console.log(currentHistory)


        // await updateHistory({ userId, currentHistory }).unwrap();
        // await updateBasket({ userId, currentBasket: [] }).unwrap();


        clearBasketQuery(userId);
        dispatch(clearBasket());

        setLoading(false);
        setModal(true);

        setTimeout(() => {
            setModal(false);
            setOrderName(name);
            setOrderSurname(surname);
            setOrderAddress("");
            setOrderPostNumber("");
            // navigate('/');
        }, 5000)
        setTimeout(() => {

            navigate('/');
        }, 6000)

        // setOrderName(name);
        // setOrderSurname(surname);
        // setOrderAddress("");
        // setOrderPostNumber("");
        // navigate('/');


    }




    if (delivery === "9") {
        return (
            <>
                <Modal active={modal} />
                <div className="container">
                    <h3 className='order__title title'>Данные для доставки</h3>
                    <div className="order">
                        <form className="order__form" onSubmit={onSubmitOrder}>
                            <input name="name" required type="text" placeholder={name} value={orderName} onChange={(e) => setOrderName(e.target.value)}></input>
                            <input name="surname" required type="text" placeholder={orderSurname ? orderSurname : "Фамилия"} value={orderSurname}
                                onChange={(e) => setOrderSurname(e.target.value)}
                            ></input>
                            <input name="postnumber" required type="number" placeholder="Номер отделения европочты" value={orderPostNumber} onChange={(e) => setOrderPostNumber(e.target.value)}></input>
                            <InputMask required name="tel" mask="+375 99 999 99 99" placeholder={tel ? tel : "Ваш номер телефона"} value={orderTel} onChange={(e) => setOrderTel(e.target.value)}></InputMask>
                            <div className="order__privacy">
                                <input type='checkbox' required className='order__checkbox' /> <span>Я согласен с политикой конфиденциальности данного сайти и даю свое согласие на обработку персональных данных</span>
                            </div>
                            {/* <button disabled={loading ? true : false} type="submit">{loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Войти"}</button> */}
                            <button type="submit" disabled={totalPrice === "0.00" || loading} name="send"  >{loading ? <Spinner animation="border" variant="light" size="md" role="status" /> : "Доставить товары"}</button>
                        </form>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Modal active={modal} />
                <div className="container">
                    <h3 className='order__title title'>Данные для доставки</h3>
                    <div className="order">
                        <form className="order__form" onSubmit={onSubmitOrder}>
                            <input name="name" required type="text" placeholder={name} value={orderName} onChange={(e) => setOrderName(e.target.value)}></input>
                            <input name="adress" type="text" required placeholder="Адрес доставки в Могилеве" value={orderAddress} onChange={(e) => setOrderAddress(e.target.value)}></input>
                            <InputMask required name="tel" mask="+375 99 999 99 99" placeholder={tel ? tel : "Ваш номер телефона"} value={orderTel} onChange={(e) => setOrderTel(e.target.value)}></InputMask>
                            <div className="order__privacy">
                                <input type='checkbox' required className='order__checkbox' /> <span>Я согласен с политикой конфиденциальности данного сайти и даю свое согласие на обработку персональных данных</span>
                            </div>
                            <button type="submit" disabled={totalPrice === "0.00" || loading} name="send"  >{loading ? <Spinner animation="border" variant="light" size="md" role="status" /> : "Доставить товары"}</button>
                            {/* <input className='order__submit' type="submit" disabled={totalPrice === "0.00"} name="send" value="Доставить товары"  ></input> */}
                        </form>
                    </div>
                </div>
            </>
        )
    }

}

