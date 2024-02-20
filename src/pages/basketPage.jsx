import '../css/basketPage.scss';

import { useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";

export function BasketPage() {

  const { basket } = useSelector(state => state.user);


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

        <MdDelete style={{ display: "block", width: "22px", height: "22px", cursor:"pointer" }} />
      </li>

    )
  })



  return (
    <div className="container">
      <div className="basket">
        <h3>Корзина</h3>
        <ul className="basket__items">
          {basketList}
        </ul>
      </div>
    </div>


  )
}
