import '../css/basketPage.scss';

import { useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";

export function BasketPage() {

  const { basket } = useSelector(state => state.user);


  const basketList = basket.map(item => {
    return (

      <li className="basket__item" key={item.id}>
        <span >{item.item}</span>
        <button className="basket__btn">-</button>
        <span className='basket__quantity'>{item.quantity}</span>
        <button className="basket__btn">+</button>
        <MdDelete />
      </li>

    )
  })



  return (
    <div className="container">
      <div className="basket">
        <h3>Корзина</h3>
        <ul>
          {basketList}
        </ul>
      </div>
    </div>


  )
}
