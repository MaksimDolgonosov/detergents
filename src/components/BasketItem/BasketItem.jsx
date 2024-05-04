import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, addQuantityToBasket, removeQuantityFromBasket } from "../../slices/userSlice";
import { useSetBasketQuantityMutation, useRemoveFromBasketMutation } from "../../query/basketApiSlice";



const BasketItem = ({ item }) => {
    const userId = useSelector(state => state.user.id);
    const dispatch = useDispatch();
    const [setBasketQuantity] = useSetBasketQuantityMutation();
    const [removeFromBasketFunc] = useRemoveFromBasketMutation();


    const onRemoveItem = async (itemId) => {
        await removeFromBasketFunc({ userId, itemId });
        dispatch(removeFromBasket(itemId));
    }

    const onChangeQuantity = async (itemId, simbol, quantity) => {
        if (quantity === 1 && simbol === "minus") {
            return
        } else {

            if (simbol === "plus") {
                await setBasketQuantity({ userId, itemId, quantity: quantity + 1 });
                dispatch(addQuantityToBasket(itemId))
            } else {
                await setBasketQuantity({ userId, itemId, quantity: quantity - 1 });
                dispatch(removeQuantityFromBasket(itemId));
            }
            // simbol === "plus" ? await setBasketQuantity({ userId, itemId, quantity: quantity + 1 }) : await setBasketQuantity({ userId, itemId, quantity: quantity - 1 });
            // simbol === "plus" ? dispatch(addQuantityToBasket(itemId)) : dispatch(removeQuantityFromBasket(itemId));
        }

    }

    return (
        <li className="basket__item">
            <div className="basket__item_img" style={{ width: "40px", height: "40px", marginRight: "5px", borderRadius: "100%" }} >
                <img src={item.image} alt={item.title} style={{ width: "40px", height: "40px", borderRadius: "100%", border: "1px solid #6495ED" }} />
            </div>

            <span className="basket__name">{item.title}</span>
            <div className="basket__counter">
                <button className="basket__btn" onClick={() => onChangeQuantity(item.id, "minus", item.quantity)}>-</button>
                <span className='basket__quantity'>{item.quantity}</span>
                <button className="basket__btn" onClick={() => onChangeQuantity(item.id, "plus", item.quantity)}>+</button>
            </div>
            <div className="basket__price" style={{ width: "85px" }}>{(item.price * item.quantity).toFixed(2)} руб</div>
            <MdDelete onClick={() => onRemoveItem(item.id)} title='Удалить товар' />
        </li>
    )
}

export default BasketItem;

