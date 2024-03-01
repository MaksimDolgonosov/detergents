import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, addQuantityToBasket, removeQuantityFromBasket } from "../../slices/userSlice";
import { useAddBasketMutation, useLazyGetUserQuery } from '../../query/userApiSlice';



const BasketItem = ({ item }) => {
    const userId = useSelector(state => state.user.id);
    const dispatch = useDispatch();
    const [setUserId] = useLazyGetUserQuery();
    const [updateBasket] = useAddBasketMutation();

    const onRemoveItem = async (itemId) => {
        const user = await setUserId(userId);
        const currentBasket = user.data.basket.slice();
        const newBasket = currentBasket.filter(item => item.id !== itemId)
        dispatch(removeFromBasket(itemId));
        await updateBasket({ userId, currentBasket: newBasket }).unwrap();
    }

    const onChangeQuantity = async (itemId, simbol) => {
        const user = await setUserId(userId);
        const currentBasket = user.data.basket.slice();
        const newBasket = currentBasket.map(product => {
            if (product.id === itemId) {
                const obj = simbol === "plus" ? { quantity: item.quantity + 1 } : { quantity: item.quantity - 1 }
                // const obj = { quantity: item.quantity + 1 };
                return { ...product, ...obj }
            }
            return product;
        })
        simbol === "plus" ?  dispatch(addQuantityToBasket(itemId)) : dispatch(removeQuantityFromBasket(itemId))
        await updateBasket({ userId, currentBasket: newBasket }).unwrap();
    }


    // const onMinusQuantity = async (itemId) => {
    //     const user = await setUserId(userId);
    //     const currentBasket = user.data.basket.slice();
    //     const newBasket = currentBasket.map(product => {
    //         // console.log(product)
    //         if (product.id === itemId) {
    //             const obj = { quantity: item.quantity - 1 };
    //             return { ...product, ...obj }
    //         }
    //         return product;
    //     })
    //     // dispatch(removeQuantityFromBasket(itemId));
    //     await updateBasket({ userId, currentBasket: newBasket }).unwrap();
    // }



    return (
        <li className="basket__item">
            <img src={item.image} alt={item.title} style={{ with: "40px", height: "40px", borderRadius: "100%", border: "2px solid #6495ED" }} />
            <span className="basket__name">{item.title}</span>
            <div className="basket__counter">
                <button className="basket__btn" onClick={() => onChangeQuantity(item.id, "minus")}>-</button>
                <span className='basket__quantity'>{item.quantity}</span>
                <button className="basket__btn" onClick={() => onChangeQuantity(item.id, "plus")}>+</button>
            </div>

            <MdDelete style={{ display: "block", width: "22px", height: "22px", cursor: "pointer" }} onClick={() => onRemoveItem(item.id)} title='Удалить товар' />
        </li>
    )
}


export default BasketItem