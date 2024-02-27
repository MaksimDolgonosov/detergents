import '../css/basketPage.scss';

import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { useAddBasketMutation, useLazyGetUserQuery, useGetUserQuery } from '../query/userApiSlice';
import Spinner from 'react-bootstrap/Spinner';
import { removeFromBasket } from '../slices/userSlice';

export function BasketPage() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  // const { basket } = useSelector(state => state.user);
  // const { data: basket = [], isLoading } = useGetBasketQuery(id);
  const { data: user = { basket: [] }, isLoading } = useGetUserQuery(userId);

  const [setUserId] = useLazyGetUserQuery();
  const [updateBasket] = useAddBasketMutation();
  //console.log(user);




  const basket = user.basket;

  const onRemoveItem = async (itemId) => {
    const user = await setUserId(userId);
    const currentBasket = user.data.basket.slice();

    const newBasket = currentBasket.filter(item => item.id !== itemId)
    dispatch(removeFromBasket(itemId));

    await updateBasket({ userId, currentBasket: newBasket }).unwrap();

  }

  // fetch('http://localhost:3001/users/x8m1HZZWYrd9eE9lqxY0e19EL4H2', {
  //   method: 'PATCH', // <--- имя запроса
  //   body: JSON.stringify({
  //     basket: [
  //       {
  //         id: 49,
  //         title: "Таблетки для посудомоечной машины",
  //         quantity: 1,
  //         price: 50,
  //         image: "https://img.5element.by/import/images/ut/goods/good_8ca419a2-99ca-11ee-8db3-005056012b6d/tabletki-dlya-pmm-finish-powerball-quantum-84-sht-1_600.jpg"
  //       }
  //     ]
  //   }), // Тело 
  //   headers: {
  //     'Content-Type': 'application/json'
  //     // Заголовки
  //   },
  // })
  //   .then(data => data.json())
  //   .then(data => console.log(data))

  // fetch(`http://localhost:3001/users/x8m1HZZWYrd9eE9lqxY0e19EL4H2`)
  //   .then(data => data.json(data))
  //   .then(data => console.log(data.basket))

  const basketList = basket.map(item => {
    return (
      <li className="basket__item" key={item.id}>
        <img src={item.image} alt={item.title} style={{ with: "40px", height: "40px", borderRadius: "100%", border: "2px solid #6495ED" }} />
        <span className="basket__name">{item.title}</span>
        <div className="basket__counter">
          <button className="basket__btn">-</button>
          <span className='basket__quantity'>{item.quantity}</span>
          <button className="basket__btn">+</button>
        </div>

        <MdDelete style={{ display: "block", width: "22px", height: "22px", cursor: "pointer" }} onClick={() => onRemoveItem(item.id)} title='Удалить товар' />
      </li>

    )

  })



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
