import '../css/basketPage.scss';

import { useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { useGetBasketQuery, useGetUserQuery } from '../query/userApiSlice';
import Spinner from 'react-bootstrap/Spinner';


export function BasketPage() {
  const id = useSelector(state => state.user.id);
  // const { basket } = useSelector(state => state.user);
  // const { data: basket = [], isLoading } = useGetBasketQuery(id);
  const { data: user = { basket: [] }, isLoading } = useGetUserQuery(id);
  console.log(user);
  const basket = user.basket;

  const basketList = basket.map(item => {
    return (
      <li className="basket__item" key={item.id}>
        <img src={item.image} alt={item.item} style={{ with: "40px", height: "40px", borderRadius: "100%", border: "2px solid #6495ED" }} />
        <span className="basket__name">{item.item}</span>
        <div className="basket__counter">
          <button className="basket__btn">-</button>
          <span className='basket__quantity'>{item.quantity}</span>
          <button className="basket__btn">+</button>
        </div>

        <MdDelete style={{ display: "block", width: "22px", height: "22px", cursor: "pointer" }} />
      </li>

    )

  })



  return (
    <div className="container">
      <div className="basket">
        <h3>Корзина</h3>
        <ul className="basket__items">
          {id || isLoading ? basketList : <Spinner animation="border" />}
        </ul>
      </div>
    </div>


  )
}
