import '../css/orderPage.scss';

import { useSelector } from "react-redux"
import InputMask from 'react-input-mask';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAddBasketMutation, useAddHistoryMutation, useGetUserQuery, useLazyGetUserQuery } from "../query/userApiSlice";
import { clearBasket } from "../slices/userSlice";

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

    const { data: user = { history: [] } } = useGetUserQuery(userId);
    const userHistory = user.history;
    const [updateHistory] = useAddHistoryMutation();
    const [updateBasket] = useAddBasketMutation();
    const [setUserId] = useLazyGetUserQuery();
    // console.log(userHistory);
    // const date = new Date()
    // console.log(date.getDate(), date.getMonth() + 1, date.getFullYear());


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
        if (delivery === "9") {
            console.log(`Заказ для ${orderName} ${orderSurname}, тел: ${orderTel}, в отделение Европочты №${orderPostNumber} на сумму ${totalPrice}руб. + 9руб. за доставку, товары: ${basketList} `);
        } else {
            console.log(`Заказ для ${orderName}, тел: ${orderTel}, по адресу №${orderAddress} на сумму ${totalPrice}руб., товары: ${basketList} `);
        }
        const date = await new Date();
        const stringDate = await `${addZero(date.getDate())}.${addZero(date.getMonth())}.` + date.getFullYear();
        const user = await setUserId(userId);
        const currentHistory = user.data.history.slice();
        currentHistory.push({ order: basketList, date: stringDate });
        await updateHistory({ userId, currentHistory }).unwrap();

        await updateBasket({ userId, currentBasket: [] }).unwrap();
        dispatch(clearBasket());

        setOrderName(name);
        setOrderSurname(surname);
        setOrderAddress("");
        setOrderPostNumber("");
        // const data = await JSON.stringify({ orderName, orderSurname, orderTel });
        // fetch("../../server.php", {
        //     method: "POST",
        //     headers: { "Content-type": "application/json" },
        //     body: data
        // })
        //     .then(data => data.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.log(error))
    }





    if (delivery === "9") {
        return (

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
                       <input type='checkbox'required className='order__checkbox'/> <span>Я согласен с политикой конфиденциальности данного сайти и даю свое согласие на обработку персональных данных</span>
                        </div> 
                        <input className='order__submit' type="submit" name="send" value="Доставить товары"  ></input>
                    </form>
                </div>
            </div>
        )
    } else {
        return (

            <div className="container">
                <h3 className='order__title title'>Данные для доставки</h3>
                <div className="order">
                    <form className="order__form" onSubmit={onSubmitOrder}>
                        <input name="name" required type="text" placeholder={name} value={orderName} onChange={(e) => setOrderName(e.target.value)}></input>
                        <input type="text" placeholder="Адрес доставки в Могилеве" value={orderAddress} onChange={(e) => setOrderAddress(e.target.value)}></input>
                        <InputMask required name="tel" mask="+375 99 999 99 99" placeholder={tel ? tel : "Ваш номер телефона"} value={orderTel} onChange={(e) => setOrderTel(e.target.value)}></InputMask>
                        <div className="order__privacy">
                       <input type='checkbox'required className='order__checkbox'/> <span>Я согласен с политикой конфиденциальности данного сайти и даю свое согласие на обработку персональных данных</span>
                        </div> 
                        <input className='order__submit' type="submit" name="send" value="Доставить товары"  ></input>
                    </form>
                </div>
            </div>
        )
    }

}

