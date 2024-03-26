import '../css/basketPage.scss';

import { useGetUserQuery } from '../query/userApiSlice';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from "react-redux";
import BasketItem from '../components/BasketItem/BasketItem';
import { useState } from 'react';
import { setDeliveryUser } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';



export function BasketPage() {


  // const userId = useSelector(state => state.user.id);
  // const { data: user = { basket: [] }, isLoading } = useGetUserQuery(userId);
  // console.log(user);


  const userId = useSelector(state => state.user.id);
  const { data: user = [{ history: [] }], isLoading } = useGetUserQuery(userId);
  const [delivery, setDelivery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = user[0].basket || [];
  const totalPrice = basket.reduce(((sum, current) => sum + current.price * current.quantity), 0).toFixed(2);

  const basketList = basket.map(item => <BasketItem item={item} key={item.id} />)
  const basketLength = basket.reduce(((sum, current) => sum + current.quantity), 0);


  const onOrder = async (e) => {
    e.preventDefault();
    if (delivery === "") {
      return
    } else {
      await dispatch(setDeliveryUser(delivery));

      // return <Navigate to="/order" delivery={delivery} basket={basket} />
      navigate("/order");
      // return <OrderPage delivery={delivery} basket={basket} />

    }

  }


  return (
    <div className="container">
      <h3 style={{ marginTop: "5px" }} className='title'>Корзина</h3>
      {basketLength === 0 ? <h5>В вашей корзине нет товаров</h5> : null}
      <div className="basket">
        <ul className="basket__items">
          {userId || isLoading ? basketList : <Spinner animation="border" />}
        </ul>
        <div className='basket__toOrder'>
          <form>
            <div className="basket__toOrder__total">
              <h6>Итого</h6>
              <span>{delivery === "" ? +totalPrice : +totalPrice + +delivery} руб.</span>
            </div>
            <div className="basket__toOrder_underline"></div>
            <div className="basket__toOrder__goods">
              <div>Товары - {basketLength}шт.</div>
              <span>{+totalPrice} руб.</span>
            </div>
            <div className="basket__toOrder__delivery">
              <div>Доставка  </div>
              <span>{delivery} руб.</span>
            </div>
            <div className="basket__toOrder__deliveryChoise">

              <label htmlFor="element" className="basket__toOrder__deliveryLabel">Выберите доставку:</label>
              <select
                onChange={(e) => setDelivery(e.target.value)}
                required
                className="basket__toOrder__deliverySelect"
                name="element"
                id="element">
                <option value="">Выберите доставку...</option>
                <option value={0}>г.Могилев</option>
                <option value={9}>По Беларуси</option>
              </select>

            </div>
            {delivery === "" ? <div className="basket__toOrder__deliveryMessage">Выберите, пожалуйста, место доставки</div> : null}
            <div className="basket__toOrder__deliveryComment">*
              Доставка по беларуси осуществляется посредством почтового сервиса Европочта.
            </div>
            <button type="submit" className="basket__toOrder__deliveryBtn" onClick={onOrder} disabled={basketLength === 0}>Оформить заказ</button>
          </form>
        </div>

      </div>
    </div >


  )
}
