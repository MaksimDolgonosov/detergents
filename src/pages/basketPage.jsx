import '../css/basketPage.scss';

import { useGetUserQuery } from '../query/userApiSlice';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from "react-redux";
import BasketItem from '../components/BasketItem/BasketItem';



export function BasketPage() {
  const userId = useSelector(state => state.user.id);
  const { data: user = { basket: [] }, isLoading } = useGetUserQuery(userId);

  //console.log(user);
  const basket = user.basket;


  const basketList = basket.map(item => <BasketItem item={item} key={item.id} />)


  return (
    <div className="container">
      <div className="basket">
        <h3>Корзина</h3>
        <ul className="basket__items">
          {userId || isLoading ? basketList : <Spinner animation="border" />}
        </ul>
      </div>
    </div>


  )
}
